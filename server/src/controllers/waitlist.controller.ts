import type { Request, Response } from "express";
import { db } from "../db/client.js";
import { waitlistEntries } from "../db/schema.js";
import { waitlistSchema } from "../validators/waitlist.js";

export async function createWaitlistEntry(req: Request, res: Response) {
  const input = waitlistSchema.parse(req.body);

  try {
    await db.insert(waitlistEntries).values({
      name: input.name,
      email: input.email,
      locale: input.locale,
    });
  } catch (error) {
    if (isUniqueViolation(error)) {
      res.status(200).json({ status: "already_joined" });
      return;
    }

    throw error;
  }

  res.status(201).json({ status: "joined" });
}

function isUniqueViolation(error: unknown): boolean {
  if (typeof error !== "object" || error === null) {
    return false;
  }

  if ("code" in error && error.code === "23505") {
    return true;
  }

  if ("cause" in error) {
    return isUniqueViolation(error.cause);
  }

  return false;
}
