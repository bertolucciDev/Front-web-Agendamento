export const Role = {
  CLIENT: "CLIENT",
  OWNER: "OWNER",
  STAFF: "STAFF",
  ADMIN: "ADMIN"
}as const

export type Role = (typeof Role)[keyof typeof Role]