import axios, { AxiosInstance } from "axios";
import { getCookies } from "utils";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_API,
});

const createInstance = (): AxiosInstance => {
  return setInterceptors(instance);
};

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(
    (config) => {
      const accessToken = getCookies("access_token");

      if (accessToken) {
        config.headers["Authorization"] = accessToken;
      }
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
