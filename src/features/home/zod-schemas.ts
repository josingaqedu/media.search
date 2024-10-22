import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8).max(256),
});

export const signUpSchema = z.object({
  name: z.string().trim().min(3).max(256),
  email: z.string().trim().email(),
  password: z.string().min(8).max(256),
});
