import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string()
    .email("Email inválido"),

  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(32, "A senha deve ter no máximo 32 caracteres"),
})

export type LoginSchema = z.infer<typeof loginSchema>