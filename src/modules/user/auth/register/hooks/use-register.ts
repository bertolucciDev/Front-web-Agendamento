import type { AxiosError } from "axios"
import { useMutation } from "@tanstack/react-query"

import { registerService } from "@/modules/user/auth/register/services/register-service"
import type { RegisterSchema } from "@/modules/user/auth/register/schemas/register.schema"
import type { RegisterResponse } from "@/modules/user/auth/register/types/register-response.type"

interface RegisterError {
  message: string
  statusCode: string
}

export function useRegister() {
  return useMutation<
    RegisterResponse,
    AxiosError<RegisterError>,
    RegisterSchema
  >({
    mutationFn: registerService,
  })
}
