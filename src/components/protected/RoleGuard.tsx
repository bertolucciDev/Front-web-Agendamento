import { Navigate } from "react-router-dom"
import { useMe } from "@/modules/user/auth/me/hooks/useMe"
import { Role } from "@/modules/user/auth/login/enums/login-role.enum"

type RoleGuardProps = {
  roles: Role[]
  children: React.ReactNode
}

export function RoleGuard({ roles, children }: RoleGuardProps) {
  const { data } = useMe()

  if (!data) {
    return <Navigate to="/login" />
  }

  if (!roles.includes(data.user.role)) {
    return <Navigate to="/unauthorized" />
  }

  return children
}