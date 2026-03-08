import { api } from "@/lib/axios";
import type { LoginResponse } from "@/modules/user/auth/login/types/login-response.type";
import type { LoginSchema } from "@/modules/user/auth/login/schemas/login.schema";

export async function loginService(
  data: LoginSchema
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>(
    "auth/login",
    data
  )

  return response.data
}