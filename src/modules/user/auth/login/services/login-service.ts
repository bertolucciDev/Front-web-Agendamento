import { api } from "@/lib/axios"
import type { LoginSchema } from "@/modules/user/auth/login/schemas/login.schema"
import type { LoginResponse } from "@/modules/user/auth/login/types/login-response.type"

export async function loginService(data: LoginSchema): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/auth/login", data)

  return response.data
}
