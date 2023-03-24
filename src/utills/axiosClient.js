import axios from "axios";
import { getItem, KEY_ACCESS_TOKEN, removeItem } from "./localStorageManeger";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL || "http://localhost:8000",
  withCredentials: true,
});

axiosClient.interceptors.request.use((request) => {
  const accessToken = getItem(KEY_ACCESS_TOKEN);
  request.headers["Authorization"] = accessToken;

  return request;
});

axiosClient.interceptors.response.use(async (response) => {
  // const data = response.data;

  if (response.statusText === "OK") {
    return response;
  }

  const statusCode = response.status;
  const error = response.message;

  if (statusCode === 401) {
    removeItem(KEY_ACCESS_TOKEN);
    window.location.replace("/login", "_self");
    // return Promise.reject(error);
  }
  // return Promise.reject(error);
});
