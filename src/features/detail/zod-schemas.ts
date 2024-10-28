import { z } from "zod";

export const detailSchema = z.object({
  id: z.string().trim(),
});

export const providerSchema = z.object({
  id: z.string().trim(),
});
