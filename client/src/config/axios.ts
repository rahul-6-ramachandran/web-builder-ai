import axios, { AxiosInstance } from "axios";


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
      let token =  localStorage.getItem('userInfo')

   config.headers['Authorization'] = 'Bearer ' + token
   return config
   } catch (error) {
      return Promise.reject(error)
   }

})

export default Axios;