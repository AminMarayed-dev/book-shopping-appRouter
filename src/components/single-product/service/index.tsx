import axios from "axios"

export const getBookById =async (id : string) =>{
const {data} = await axios.get(`http://localhost:3000/books?id=${id}`)
console.log(data[0])
return data[0]
}

export const getBookByAge =async ({genre , ageGroup} : {genre :string , ageGroup:string}) =>{
    const {data} = await axios.get(`http://localhost:3000/books?genre=${genre}&ageGroup=${ageGroup}`)
    return data
    }