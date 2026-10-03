import { getAuth } from "@clerk/express";
import type { NextFunction, Request, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export function clerkAuthConfigured() {
  const secret = process.env.CLERK_SECRET_KEY;
  const publishable = process.env.CLERK_PUBLISHABLE_KEY;
  if (!secret?.startsWith("sk_test_") && !secret?.startsWith("sk_live_")) {
    return false;
  }
  return isClerkPublishableKey(publishable);
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!clerkAuthConfigured()) {
    res.status(503).json({ error: "Auth is not configured" });
    return;
  }

  const { userId } = getAuth(req);

  if (!userId) {
    res.status(401).json({ error: "Authentication required" });
    return;
  }

  req.userId = userId;
  res.locals.userId = userId;
  next();
}

function isClerkPublishableKey(key: string | undefined) {
  if (!key) return false;
  const match = /^pk_(?:test|live)_([A-Za-z0-9+/]+={0,2})$/.exec(key);
  const payload = match?.[1];
  if (!payload) return false;

  const decoded = Buffer.from(payload, "base64").toString("utf8");
  if (!decoded.endsWith("$")) return false;
  const host = decoded.slice(0, -1);
  return host.includes(".") && !host.includes("$");
}
