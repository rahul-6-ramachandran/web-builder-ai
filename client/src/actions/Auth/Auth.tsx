import { AxiosError } from "axios"
import Axios from "../../config/axios"
import { CreateUser } from "../../types.dto"
import {decodeJWT} from '../../utils/utils'

// Login
export const signIn = async(user : CreateUser)=>{
    try {
        const {data} = await Axios.post('api/auth/login',user)
        // const token = data.access_token

        const decodedToken = await decodeJWT(data.access_token)
        console.log(decodedToken,"token")
        localStorage.setItem('userInfo',JSON.stringify(decodedToken))
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
        const {data} = await Axios.post('api/auth/signup',user)
        const decodedToken = await decodeJWT(data.access_token)
        console.log(data,"token")
        localStorage.setItem('userInfo',JSON.stringify(decodedToken))
        return data
    } catch (error) {
        const err = error as AxiosError;
        return {
            error : err.message
        }
    }
}