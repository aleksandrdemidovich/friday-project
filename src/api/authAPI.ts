
import {instance} from "./instanceAPI";
import {IUser} from "../redux/authReducer";


export type DefaultResponseType = {
    info: string,
    error?: string
}

export type SignUpDataType = {
    error?: string
}


export const authAPI = {
    me: async () => {
        const response = await instance.post<IUser>('auth/me')
        return response.data
    },
    login: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<IUser>('auth/login', {email, password, rememberMe})
        return response.data
    },
    logout: async () => {
        const response = await instance.delete<DefaultResponseType>('auth/me')
        console.log('LOGOUT: ', response.data)
        return response.data
    },
    passRecovery(email: string, message: string) {
        return instance.post<DefaultResponseType>('auth/forgot', {
            email,
            message,
            from: "front-admin <demid.kbr@mail.ru>"
        })
    },
    inputNewPass(password: string, resetPasswordToken: string | undefined) {
        return instance.post<DefaultResponseType>('auth/set-new-password', {password, resetPasswordToken})
    },
    signUp(email: string, password: string) {
        return instance.post<SignUpDataType>('auth/register', {email, password})
    }
}