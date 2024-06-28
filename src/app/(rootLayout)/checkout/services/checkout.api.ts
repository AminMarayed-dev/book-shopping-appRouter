import { api } from "@/api/config.api";


export async function checkOutById(id: string) {
    const response = await api.get(`/users/${id}`);
    return response.data;
  }


