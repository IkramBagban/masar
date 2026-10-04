import express, { Router } from "express";
import { handleClerkWebhook } from "../controllers/webhook.controller.js";
import { asyncHandler } from "../lib/asyncHandler.js";

export const webhookRouter = Router();

webhookRouter.post(
  "/",
  express.raw({ type: "*/*" }), // Parse the request body as raw bytes for webhook verification
  asyncHandler(handleClerkWebhook),
);
