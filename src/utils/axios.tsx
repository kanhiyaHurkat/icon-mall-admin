import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://icon-mall.herokuapp.com/api'
})
