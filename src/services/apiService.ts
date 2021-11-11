import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const ApiService = axios.create({
    baseURL: 'https://api-pilllomart.vercel.app/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axios.interceptors.request.use(function (config: AxiosRequestConfig) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response: AxiosResponse) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default ApiService;