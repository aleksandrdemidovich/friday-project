import axios from "axios";
import {IUser} from "./loginReducer";

export const baseURL = 'http://localhost:7542/2.0/';


export const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

export type DefaultResponse = {
    info: string,
    error?: string
}



export const authAPI = {
    me: async () => {
        const response = await instance.post<IUser>('auth/me')
        return response.data
    },
    login: async (email: string, password:string, rememberMe:boolean) => {
        const response = await instance.post<IUser>('auth/login', {email, password, rememberMe})
        return response.data
    },
    logout: async () => {
        const response = await instance.delete<DefaultResponse>('auth/me')
        console.log('LOGOUT: ', response.data)
        return response.data
    },
}
