import { useQuery } from "@tanstack/react-query"
import { getToken } from "@/modules/user/auth/utils/token"
import { getMeService } from "../services/get-me.service"

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMeService,
    retry: false,
    enabled: Boolean(getToken()),
  })
}
