import axios from "axios";
import { LoaderAction } from "../Redux/Actions/LoadAction";
import MyStore from "../Redux/Store";

const API_KEY = "b11725f9e5398c8211838ec6320bf330";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// Request → loader يبدأ
axiosInstance.interceptors.request.use(
  (config) => {
    config.params = { ...config.params, api_key: API_KEY };
    MyStore.dispatch(LoaderAction(true)); // شغل اللودر
    return config;
  },
  (error) => {
    MyStore.dispatch(LoaderAction(false)); // وقف اللودر لو في error
    return Promise.reject(error);
  }
);

// Response → loader يقف
axiosInstance.interceptors.response.use(
  (response) => {
    setTimeout(() => {
      MyStore.dispatch(LoaderAction(false)); // وقف اللودر بعد ما ييجي الرد
    }, 500);
    return response;
  },
  (error) => {
    MyStore.dispatch(LoaderAction(false));
    return Promise.reject(error);
  }
);
