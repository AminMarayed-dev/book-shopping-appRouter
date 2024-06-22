import { useQuery } from "@tanstack/react-query";
import { getBooksByAgeGroup } from "@/app/(rootLayout)/product-category/services";
import { BooksEntity } from "@/type";
import { getBooksByGenre } from "@/app/(rootLayout)/product-category/services";

export const useGetBooksByAgeGroup = (ageGroup: string) => {
  return useQuery<BooksEntity[]>({
    queryKey: ["book by ageGroup"],
    queryFn: () => getBooksByAgeGroup(ageGroup),
  });
};

export const useGetBooksByGenre = ({
  genre,
  ageGroup,
}: {
  genre: string;
  ageGroup: string;
}) => {
  return useQuery<BooksEntity[]>({
    queryKey: ["book by ageGroup and genre"],
    queryFn: () => getBooksByGenre({ genre, ageGroup }),
  });
};
