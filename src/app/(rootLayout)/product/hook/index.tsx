import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editUser, getBookByAge, getBookById, getUser } from "../service";
import { BooksEntity, TypeUser } from "@/type";
import { Typeparams } from "./type";

export const useGetBookById = (id: string) => {
  return useQuery<BooksEntity>({
    queryKey: ["getBookId"],
    queryFn: () => getBookById(id),
  });
};

export const useGetBookByAge = (params: Typeparams) => {
  return useQuery<BooksEntity[]>({
    queryKey: ["bookByAge"],
    queryFn: () => getBookByAge(params),
  });
};

export const useGetUser = (user: string) => {
  return useQuery<TypeUser>({
    queryKey: ["getUserById"],
    queryFn: () => getUser(user),
  });
};

export const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["editUserkey"],
    mutationFn: editUser,
    onSuccess: () => {
      console.log("ok shod");
      queryClient.invalidateQueries({ queryKey: ["getUserById"] });
    },
  });
};
