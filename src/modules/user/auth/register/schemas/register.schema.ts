import { z } from "zod"

export const documentTypeSchema = z.enum(["CPF", "CNPJ"])

const onlyDigits = (value: string) => value.replace(/\D/g, "")

export const registerSchema = z
  .object({
    documentType: documentTypeSchema,
    document: z.string().min(1, "Informe CPF ou CNPJ"),
    name: z.string().min(3, "Informe seu nome completo"),
    email: z.string().email("Email inválido"),
    password: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .max(32, "A senha deve ter no máximo 32 caracteres"),
    confirmPassword: z.string().min(6, "Confirme sua senha"),
    phone: z.string().min(10, "Telefone inválido"),
  })
  .superRefine((data, ctx) => {
    const digits = onlyDigits(data.document)

    if (data.documentType === "CPF" && digits.length !== 11) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["document"],
        message: "CPF inválido",
      })
    }

    if (data.documentType === "CNPJ" && digits.length !== 14) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["document"],
        message: "CNPJ inválido",
      })
    }

    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "As senhas não conferem",
      })
    }
  })

export type RegisterSchema = z.infer<typeof registerSchema>
export type DocumentType = z.infer<typeof documentTypeSchema>
