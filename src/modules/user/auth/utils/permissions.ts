import { Role } from "@/modules/user/auth/login/enums/login-role.enum";

export function isOwner(role?: Role) {
  return role === Role.OWNER
}

export function isClient(role?: Role) {
  return role === Role.CLIENT
}

export function isStaff(role?: Role) {
  return role === Role.STAFF
}

export function isAdmin(role?: Role) {
  return role === Role.ADMIN
}