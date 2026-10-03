import { verifyWebhook } from "@clerk/express/webhooks";
import type { Request, Response } from "express";
import { db } from "../db/client.js";
import { users } from "../db/schema.js";
import { HttpError } from "../lib/httpError.js";

export async function handleClerkWebhook(req: Request, res: Response) {
  let evt: Awaited<ReturnType<typeof verifyWebhook>>;

  try {
    evt = await verifyWebhook(req);
  } catch {
    throw new HttpError(400, "Invalid webhook signature");
  }

  if (evt.type !== "user.created") {
    res.status(200).json({ received: true });
    return;
  }

  const email = evt.data.email_addresses.find(
    (address) => address.id === evt.data.primary_email_address_id,
  )?.email_address;

  if (!email) {
    res.status(200).json({ received: true });
    return;
  }

  await db
    .insert(users)
    .values({
      clerkUserId: evt.data.id,
      email,
      signedUpAt: new Date(evt.data.created_at),
    })
    .onConflictDoNothing({ target: users.clerkUserId });

  res.status(200).json({ received: true });
}
