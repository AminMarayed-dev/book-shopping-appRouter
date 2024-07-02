import { Typeparams, TypeUserCookie } from "../hook/type";
import { api } from "@/api/config.api";


export const getBookByAge = async (params :Typeparams) => {
  const { data } = await api.get(`/books?genre=${params.genre}&ageGroup=${params.ageGroup}`);
  return data;
};


export const getBookById = async (id: string) => {
  const { data } = await api.get(`/books?id=${id}`);
  console.log(data[0]);
  return data[0];
};




export const getUser = async (id: string) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const editUser = async (newUser: TypeUserCookie) => {
  const { data } = await api.patch(`/users/${newUser?.id}`, newUser);
  return data;
};
