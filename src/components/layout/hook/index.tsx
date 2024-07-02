import { useQuery } from "@tanstack/react-query"
import { getBookSearch } from "../service"
import { BooksEntity } from "@/type"

export const useGetBookSearch = (name : string)=>{
    return useQuery<BooksEntity[]>({
        queryKey : ["bookSearch"],
        queryFn : ()=> getBookSearch(name)
    })
}