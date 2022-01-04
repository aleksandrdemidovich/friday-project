import {instance} from "./instanceAPI";
import {IUser} from "../redux/authReducer";


export const profileAPI = {
    update: async ( avatar: string, name: string) => {
        const response = await instance.put<IUser>('auth/me', {avatar, name})
        return response.data
    }
}