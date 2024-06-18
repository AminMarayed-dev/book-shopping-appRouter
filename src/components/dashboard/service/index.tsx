import axios from "axios"
import { BooksEntity } from "../hook/type"

export const getAllBooks = async ()=>{
    const {data} = await axios.get("http://localhost:3000/books")
    return data
}

export const sendBooks = async (bodyRequest : BooksEntity)=>{
    const {data} = await axios.post("http://localhost:3000/books" , bodyRequest)
    return data
}


export const deleteBook = async (bodyRequest : BooksEntity)=>{
    const {data} = await axios.delete(`http://localhost:3000/books/${bodyRequest}`)
    return data
}

export const editBook = async (bodyRequest: BooksEntity) => {
    const { data } = await axios.patch(`http://localhost:3000/books/${bodyRequest.id}`, bodyRequest);
    return data;
}