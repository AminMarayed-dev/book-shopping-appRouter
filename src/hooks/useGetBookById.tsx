import {  getBookById } from "@/api/books.api";
import { useQuery } from "@tanstack/react-query";

export const useGetBookById = (id:string) => {
  return useQuery<any>({
    queryKey: ["book"],
    queryFn: () => getBookById(id),
  });
};