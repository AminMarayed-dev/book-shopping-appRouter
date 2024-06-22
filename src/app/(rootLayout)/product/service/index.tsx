import { TypeUserCookie } from "../hook/type";
import { api } from "@/api/config.api";


 export type Typeparams = {
  genre? : string,
  ageGroup? : string,

}

export const getBookByAge = async ({params} : {params :Typeparams}) => {
  const { data } = await api.get(`/books?genre=${params.genre}&ageGroup=${params.ageGroup}`);
  return data;
};


export const getBookById = async (id: string) => {
  const { data } = await api.get(`/books?id=${id}`);
  console.log(data[0]);
  return data[0];
};




export const getUser = async (user: string) => {
  const { data } = await api.get(`/users/${user}`);
  return data;
};

export const editUser = async (newUser: TypeUserCookie) => {
  const { data } = await api.patch(`/users/${newUser?.id}`, newUser);
  return data;
};
