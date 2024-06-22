import { useQuery } from "@tanstack/react-query"
import { getAllBooks } from "../service/index"

export const useGetAllBooks = ()=>{
    return useQuery({
       queryKey : ["AllBook"],
       queryFn : ()=> getAllBooks() 
    })
}