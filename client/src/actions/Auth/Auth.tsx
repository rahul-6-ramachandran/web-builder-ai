import { AxiosError } from "axios"
import Axios from "../../config/axios"
import { CreateUser } from "../../types.dto"



// @ts-ignore
import { onError } from '../../components/Notifications/Notify'
import {decodeJWT} from '../../utils/utils'



// Login
export const signIn = async(user : CreateUser)=>{
    try {
        console.log(user,"token")
        const {data} = await Axios.post('api/auth/login',user)
        // const token = data.access_token

        const decodedToken = await decodeJWT(data.access_token)
      
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

        if(err.response?.data){
            const serverError =
            err.response?.data||
            'An unexpected error occurred';
            console.error('Sign Up Error:', serverError);
            onError(serverError);
            
        }
   
   
 
   

    return {
    //   error: serverError,
      status: err.response?.status,
    };
    }
}

// logout
export const logout = ()=>{
    try {
        localStorage.removeItem('userInfo')
        return true
    } catch (error) {
        const err = error as AxiosError
        console.error(err)
        return false
    }
}