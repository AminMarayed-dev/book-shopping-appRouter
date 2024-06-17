import { api} from "./config.api";




export async function getBookById(id:string) {
    const response = await api.get(`/books/${id}`);
    return response.data;
}

export async function getBooksByAgeGroup({ageGroup}:{ageGroup:string}) {
    const response = await api.get(`/books?ageGroup=${ageGroup}`);
    return response.data;
}