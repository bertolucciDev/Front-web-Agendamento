import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/modules/user/services/get-user-by-id";

export function useUser(id?: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      if (!id) throw new Error("User id is required");
      return getUserById(id);
    },
    enabled: !!id,
  });
}
