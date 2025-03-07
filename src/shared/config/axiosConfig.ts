import axios from 'axios';

import {DEFAULT_URL} from '@/shared/config';

const BACKEND_HTTPS_SERVICES = axios.create({
    baseURL: DEFAULT_URL,
    withCredentials: false,
});

BACKEND_HTTPS_SERVICES.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default BACKEND_HTTPS_SERVICES;