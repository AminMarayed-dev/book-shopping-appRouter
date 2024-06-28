
import { useQuery } from "@tanstack/react-query";
import { checkOutById } from "../services/checkout.api";

export const useGetUserById = (id:string) => {
  return useQuery<any>({
    queryKey: ["checkout"],
    queryFn: () => checkOutById(id),
  });
};