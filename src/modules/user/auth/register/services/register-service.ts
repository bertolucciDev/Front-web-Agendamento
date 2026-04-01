import { api } from "@/lib/axios"
import type { RegisterSchema } from "@/modules/user/auth/register/schemas/register.schema"
import type { RegisterResponse } from "@/modules/user/auth/register/types/register-response.type"

const onlyDigits = (value: string) => value.replace(/\D/g, "")

export async function registerService(data: RegisterSchema): Promise<RegisterResponse> {
  const document = onlyDigits(data.document)

  const payload = {
    name: data.name,
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
    phone: onlyDigits(data.phone),
    cpf: data.documentType === "CPF" ? document : undefined,
    cnpj: data.documentType === "CNPJ" ? document : undefined,
  }

  const response = await api.post<RegisterResponse>("/auth/register", payload)

  return response.data
}
