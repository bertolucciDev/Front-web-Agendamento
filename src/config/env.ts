import { z } from "zod"

const normalizeUrl = (value: string) => {
  const trimmed = value.trim()

  if (!trimmed) {
    return trimmed
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed
  }

  return `https://${trimmed}`
}

const envSchema = z.object({
  VITE_API_URL: z
    .string()
    .transform(normalizeUrl)
    .pipe(z.string().url()),
  VITE_APP_NAME: z.string(),
  VITE_APP_VERSION: z.string(),
})

export const parsedEnv = envSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error("Variáveis de ambiente inválidas", parsedEnv.error.format())
  throw new Error("Erro nas variáveis de ambiente")
}

export const env = parsedEnv.data
