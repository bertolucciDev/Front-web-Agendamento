import { useMutation } from "@tanstack/react-query";
import { getUserById } from "@/modules/user/services/get-user-by-id";

export function useGetUser() {
  return useMutation({
    mutationFn: (id: string) => getUserById(id),
  })
}