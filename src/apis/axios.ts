import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { cookies, getCookies } from "utils";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_API,
});

const createInstance = (): AxiosInstance => {
  return setInterceptors(instance);
};

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const access_token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem("refresh_token");

      config.headers["access_token"] = access_token;
      config.headers["refresh_token"] = refresh_token;

      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      //TODO: 추후 수정 필요
      return Promise.reject(error);
    }
  );

  return instance;
};

export const ax = createInstance();
