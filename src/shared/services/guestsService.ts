import axios from "axios";
import { getToken } from "@/shared/functions/getToken";

const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const getGuestById = async (id: string) => {
  const response = await serverApi.get("/guests/" + id, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return response.data;
};