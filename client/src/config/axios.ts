import axios, { AxiosInstance } from "axios";

// @ts-ignore
import { onError } from '../components/Notifications/Notify'

// Connecting backend server using axios axios
const Axios: AxiosInstance = axios.create({
   baseURL : import.meta.env.VITE_API_BASE_URL,
   headers : {
      'Content-Type' : 'application/json'
   }
})


// Each time the request is send , the token is attached 
// within the header portion of the request
Axios.interceptors.request.use((config)=>{
   try {
      let token =  localStorage.getItem('token')
   config.headers['Authorization'] = 'Bearer ' + token
   return config
   } catch (error) {
      return Promise.reject(error)
   }

})

Axios.interceptors.response.use(
   response => response,
   error => {
     const message = error.response?.data?.message || 'An error occurred';
     onError(message); // Show toast
     return Promise.reject(error);
   },
 );

export default Axios;