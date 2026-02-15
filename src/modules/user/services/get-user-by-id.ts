import { api } from "@/lib/axios";
import { userApiSchema } from "@/modules/user/schemas/user.api.schema";

export async function getUserById(id: string) {
  console.log("ID RECEBIDO NO SERVICE: ", id)

  const { data } = await api.get(`users/${id}`)

  console.log("Reponse(data): ", data)

  return userApiSchema.parse(data)
}