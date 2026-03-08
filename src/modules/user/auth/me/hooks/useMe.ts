import { useQuery } from "@tanstack/react-query";
import { getMeService } from "../services/get-me.service";

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMeService,
    retry: false
  })
}