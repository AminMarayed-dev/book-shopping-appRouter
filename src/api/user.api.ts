import { api } from "./config.api";

export async function postUser(user: any) {
  const response = await api.post("/users", user);
  return response.data;
}

export async function getUserByFilter({
  name,
  password,
}: {
  name: string;
  password: string;
}) {
  const response = await api.get(`/users?username=${name}&password=${password}`);
  return response.data;
}
