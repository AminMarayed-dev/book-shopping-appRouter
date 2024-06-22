import { useQuery } from "@tanstack/react-query"
import { getBookSearch } from "../service"

export const useGetBookSearch = (name : string)=>{
    return useQuery({
        queryKey : ["bookSearch"],
        queryFn : ()=> getBookSearch(name)
    })
}