import { Router } from "express";
import { createWaitlistEntry } from "../controllers/waitlist.controller.js";
import { asyncHandler } from "../lib/asyncHandler.js";

export const waitlistRouter = Router();

waitlistRouter.post("/", asyncHandler(createWaitlistEntry));
