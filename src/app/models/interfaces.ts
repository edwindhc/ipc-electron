import { UserInfo } from "os";

export interface LoginResponse {
    success: boolean
    user: User
    token: string

}

export interface User{
    name: string
    id: string
    email: string
    role: string
}