import { api } from "@/lib/axios"
import type { RegisterSchema } from "@/modules/user/auth/register/schemas/register.schema"
import type { RegisterResponse } from "@/modules/user/auth/register/types/register-response.type"

export async function registerService(data: RegisterSchema): Promise<RegisterResponse> {
  const response = await api.post<RegisterResponse>("/auth/register", {
    documentType: data.documentType,
    document: data.document,
    name: data.name,
    email: data.email,
    password: data.password,
    phone: data.phone,
  })

  return response.data
}
