import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import { clerkAuthConfigured } from "./middleware/requireAuth.js";
import { mountRoutes } from "./routes/index.js";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: process.env.CLIENT_ORIGIN ?? "http://localhost:5173",
    }),
  );

  if (clerkAuthConfigured()) {
    app.use(clerkMiddleware());
  }

  mountRoutes(app);
  app.use(errorHandler);

  return app;
}
