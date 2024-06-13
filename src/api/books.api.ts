import { api} from "./config.api";


export async function getBooksByAgeGroup({ageGroup}:{ageGroup:string}) {
    const response = await api.get(`/books?ageGroup=${ageGroup}`);
    return response.data;
}