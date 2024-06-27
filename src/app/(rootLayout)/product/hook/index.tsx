import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Typeparams,
  editUser,
  getBookByAge,
  getBookById,
  getUser,
} from "../service";
import { BooksEntity, TypeUser } from "@/type";
import Swal from "sweetalert2";

export const useGetBookById = (id: string) => {
  return useQuery<BooksEntity>({
    queryKey: ["getBookId"],
    queryFn: () => getBookById(id),
  });
};

export const useGetBookByAge = (params: Typeparams ) => {
  return useQuery<BooksEntity[]>({
    queryKey: ["bookByAge"],
    queryFn: () => getBookByAge( params ),
  });
};

export const useGetUser = (user: string) => {
  const queryClient = useQueryClient()
  return useQuery<TypeUser>({
    queryKey: ["getUserById"],
    queryFn: () => getUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["AllBook"] });
      Swal.fire({
        title: "حذف!",
        text: "کتاب با موفقیت حذف شد",
        icon: "success",
      });
    },
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
