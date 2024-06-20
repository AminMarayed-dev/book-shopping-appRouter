import { api } from "@/api/config.api"
import axios from "axios"

export const getBookSearch = async (name : string)=>{
    const {data} = await api.get(`/books?q=${name}`)
    return data
}