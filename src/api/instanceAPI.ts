import axios from "axios";

const baseURL = 'http://localhost:7542/2.0/';

export const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});