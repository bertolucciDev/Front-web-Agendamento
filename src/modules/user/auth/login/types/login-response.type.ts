import type { Role } from "@/modules/user/auth/login/enums/login-role.enum"

export interface LoginResponse {
  user: {
    id: string
    name: string
    email: string
    role: Role
  }
  accessToken: string
  refreshToken: string
}