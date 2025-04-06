import axios from "axios";
import {DEFAULT_URL} from "@/shared/config/api";

const BACKEND_HTTPS_SERVICES_FILE = axios.create({
    baseURL: DEFAULT_URL,
    withCredentials: false,
});

BACKEND_HTTPS_SERVICES_FILE.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'multipart/form-data';
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default BACKEND_HTTPS_SERVICES_FILE
