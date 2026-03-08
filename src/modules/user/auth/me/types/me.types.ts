import type { Role } from "@/modules/user/auth/login/enums/login-role.enum"

export interface MeResponse {
  user: {
    id: string
    name: string
    email: string
    role: Role
  }
}