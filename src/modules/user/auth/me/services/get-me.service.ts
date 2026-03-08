import { api } from "@/lib/axios";
import type { MeResponse } from "@/modules/user/auth/me/types/me.types";

export async function getMeService(): Promise<MeResponse> {
  const { data } = await api.get<MeResponse>("auth/me")
  return data
}