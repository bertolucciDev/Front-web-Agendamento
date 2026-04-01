import { z } from "zod"

export const documentTypeSchema = z.enum(["CPF", "CNPJ"])

export const registerSchema =
  z.object({
    documentType: documentTypeSchema,
    document: z.string().min(11, "CPF/CNPJ inválido"),
    name: z.string().min(3, "Informe seu nome completo"),
    email: z.string().email("Email inválido"),
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .max(32, "A senha deve ter no máximo 32 caracteres"),
    confirmPassword: z.string().min(6, "Confirme sua senha"),
    phone: z.string().min(10, "Telefone inválido"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não conferem",
  })

export type RegisterSchema = z.infer<typeof registerSchema>
export type DocumentType = z.infer<typeof documentTypeSchema>
