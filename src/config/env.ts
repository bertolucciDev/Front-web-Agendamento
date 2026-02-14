import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_APP_NAME: z.string(),
  VITE_APP_VERSION: z.string(),
})

export const parsedEnv = envSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error("Variáveis de ambiente inválidas",
  parsedEnv.error.format()
  )
  throw new Error("Erro nas variáveis de ambiente")
}

export const env = parsedEnv.data