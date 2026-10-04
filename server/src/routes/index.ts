import express, { type Express } from "express";
import { accountRouter } from "./account.routes.js";
import { waitlistRouter } from "./waitlist.routes.js";
import { webhookRouter } from "./webhook.routes.js";

export function mountRoutes(app: Express) {
  app.get("/api/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });
  app.use("/api/webhooks/clerk", webhookRouter);
  app.use(express.json());
  app.use("/api/waitlist", waitlistRouter);
  app.use("/api/account", accountRouter);
}
