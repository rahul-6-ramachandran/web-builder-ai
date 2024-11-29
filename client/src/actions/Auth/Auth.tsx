import { AxiosError } from "axios"
import Axios from "../../config/axios"
import { CreateUser } from "../../types.dto"

// Login
export const signIn = async(user : CreateUser)=>{
    try {
        const {data} = await Axios.post('/api/auth/login',user)
        return data
    } catch (error) {
        const err = error as AxiosError;
        return {
            error : err.message
        }
    }
}

// Signup
export const signUp = async(user : CreateUser)=>{
    try {
        const {data} = await Axios.post('/api/auth/signin',user)
        return data
    } catch (error) {
        const err = error as AxiosError;
        return {
            error : err.message
        }
    }
}