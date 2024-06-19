import { useQuery } from "@tanstack/react-query";
import { getBookByAge, getBookById, getUser } from "../service";
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



export const useGetUser = ( user: TypeUserCookie) => {
  return useQuery<TypeUser>({
    queryKey: ["getUserById"],
    queryFn: () => getUser( user ),
  });
};