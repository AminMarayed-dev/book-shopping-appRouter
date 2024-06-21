
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editUser, getBookByAge, getBookById, getUser } from "../service";
import { BooksEntity, TypeUser, TypeUserCookie } from "./type";

export const useGetBookById = (id: string) => {
  return useQuery<BooksEntity>({
    queryKey: ["book by id"],
    queryFn: () => getBookById(id),
  });
};


export const useGetBookByAge = ({
  genre,
  ageGroup,
}: {
  genre: string;
  ageGroup: string;
}) => {
  return useQuery<BooksEntity[]>({
    queryKey: ["bookByAge", genre, ageGroup],
    queryFn: () => getBookByAge({ genre, ageGroup }),
  });
};



export const useGetUser = ( user: string) => {
  return useQuery<TypeUser>({
    queryKey: ["getUserById"],
    queryFn: () => getUser( user ),
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