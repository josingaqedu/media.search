import { z } from "zod";

export const detailSchema = z.object({
  id: z.string().trim(),
});
