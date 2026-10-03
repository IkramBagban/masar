import { z } from "zod";

export const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(80, "Name must be at most 80 characters"),
  email: z
    .string()
    .trim()
    .email("Email is invalid")
    .transform((value) => value.toLowerCase()),
  locale: z.enum(["en", "ar"], { error: "Locale must be en or ar" }),
});
