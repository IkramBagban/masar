import { Router } from "express";
import { getAccount } from "../controllers/account.controller.js";
import { asyncHandler } from "../lib/asyncHandler.js";
import { requireAuth } from "../middleware/requireAuth.js";

export const accountRouter = Router();

accountRouter.get("/", requireAuth, asyncHandler(getAccount));
