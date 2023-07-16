import axios from "axios";

axios.defaults.baseURL = "https://poetry-6c31c94e3988.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;  // To avoid any CORS errors when sending cookies

export const axiosReq = axios.create();
export const axiosRes = axios.create();