import { getBooksByAgeGroup } from "@/api/books.api";
import { useQuery } from "@tanstack/react-query";



export const useGetBooksByGroup = ({ageGroup}:{ageGroup:string}) => {
  return useQuery<any>({
    queryKey: ["all-books"],
    queryFn: () => getBooksByAgeGroup({ageGroup}),
  });
};