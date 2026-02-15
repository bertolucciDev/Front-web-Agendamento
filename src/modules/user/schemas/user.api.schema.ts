import { z } from "zod"

export const userApiSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  isVerified: z.boolean(),

  email: z.object({
    value: z.string().email(),
  }),

  password: z.object({
    hashed: z.string(),
  }),
})

export type User = z.infer<typeof userApiSchema>
