import { useQuery } from "@tanstack/react-query"
import { getAllBooks } from "../service"

export const useGetAllBooks = ()=>{
    return useQuery({
       queryKey : ["AllBook"],
       queryFn : ()=> getAllBooks() 
    })
}