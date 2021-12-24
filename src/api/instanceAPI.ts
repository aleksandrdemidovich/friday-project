import axios from "axios";

const baseURL = 'https://neko-back.herokuapp.com/2.0/';

export const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});