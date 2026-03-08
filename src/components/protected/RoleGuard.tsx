import type { Role } from "@/modules/user/auth/login/enums/login-role.enum"

interface RoleGuardProps {
  children: React.ReactNode
  allow: Role[]
}

export function RoleGuard({ children, allow }: RoleGuardProps) {
  const { data: user, isLoading } = useMe
}