import { useQuery } from "@tanstack/react-query";
import { getBooksByAgeGroup } from "@/components/product-category/services";
import { BooksEntity } from "@/components/product-category/hook/type";
import { getBooksByGenre } from "@/components/product-category/services";

export const useGetBooksByAgeGroup = (ageGroup: string) => {
  return useQuery<BooksEntity[]>({
    queryKey: ["book by ageGroup"],
    queryFn: () => getBooksByAgeGroup(ageGroup),
  });
};


export const useGetBooksByGenre = ({  genre, ageGroup,}: { genre: string;ageGroup: string;}) => {
  return useQuery<BooksEntity[]>({
    queryKey: ["book by ageGroup and genre"],
    queryFn: () => getBooksByGenre({ genre, ageGroup }),
  });
};
