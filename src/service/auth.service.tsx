import {axiosInstance} from "../utils/axios";

export async function login(email: string, password: string) {
  try {
    const response = await axiosInstance.post('/user/login', {email, password});
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

export async function register(username: string, email: string, password: string) {
  try {
    const response = await axiosInstance.post('/user/signup', {username, email, password});
    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

export function logout() {
  localStorage.clear();
}
