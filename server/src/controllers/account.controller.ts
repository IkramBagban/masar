import { clerkClient } from "@clerk/express";
import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import { db } from "../db/client.js";
import { users } from "../db/schema.js";
import { HttpError } from "../lib/httpError.js";
import { clerkAuthConfigured } from "../middleware/requireAuth.js";

export async function getAccount(req: Request, res: Response) {
  const userId = req.userId;

  if (!userId) {
    throw new HttpError(401, "Authentication required");
  }

  const existing = await findUser(userId);

  if (existing) {
    res.status(200).json(toAccount(existing));
    return;
  }

  if (!clerkAuthConfigured()) {
    throw new HttpError(503, "Auth is not configured");
  }

  const clerkUser = await clerkClient.users.getUser(userId);
  const email = clerkUser.emailAddresses.find(
    (address) => address.id === clerkUser.primaryEmailAddressId,
  )?.emailAddress;

  if (!email) {
    throw new HttpError(400, "Account email is unavailable");
  }

  await db
    .insert(users)
    .values({
      clerkUserId: userId,
      email,
      signedUpAt: new Date(clerkUser.createdAt),
    })
    .onConflictDoNothing({ target: users.clerkUserId });

  const row = await findUser(userId);

  if (!row) {
    throw new Error("Account row missing after upsert");
  }

  res.status(200).json(toAccount(row));
}

async function findUser(clerkUserId: string) {
  const [row] = await db
    .select({
      email: users.email,
      signedUpAt: users.signedUpAt,
    })
    .from(users)
    .where(eq(users.clerkUserId, clerkUserId))
    .limit(1);

  return row;
}

function toAccount(row: { email: string; signedUpAt: Date }) {
  return {
    email: row.email,
    signedUpAt: row.signedUpAt.toISOString(),
  };
}
