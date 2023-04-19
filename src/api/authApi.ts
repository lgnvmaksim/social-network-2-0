import axios, {AxiosResponse} from "axios";
import {ResponseType} from "./commonTypes/commonTypes";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'b4d8e782-12a1-4cd0-86dd-a8ec637b9008'}
})

export type AuthType={
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

export const authApi ={
    login(data: AuthType){
        return instance.post<ResponseType<{userId: string}>>('auth/login', data)
    },
    logout(){
        return instance.delete<ResponseType>('auth/login')
    },
    me(){
        return instance.get<ResponseType<{ id: number; email: string; login: string }>>('auth/me')
    }
}
