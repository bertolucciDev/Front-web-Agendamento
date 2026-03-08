import { useMutation } from "@tanstack/react-query"
import type { LoginResponse } from "../types/login-response.type"
import type { AxiosError } from "axios"
import type { LoginSchema } from "@/modules/user/auth/login/schemas/login.schema"
import { loginService } from "@/modules/user/auth/login/services/login-service"

interface LoginError {
  message: string
  statusCode: string
}

export function useLogin() {
  return useMutation<
    LoginResponse,
    AxiosError<LoginError>,
    LoginSchema
  >({
    mutationFn: loginService
  })
}