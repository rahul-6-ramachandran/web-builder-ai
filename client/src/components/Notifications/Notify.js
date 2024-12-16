import 'react-toastify/dist/ReactToastify.css'
import { toast } from "react-toastify"

export const onSuccess = (data)=>{
    toast.success(data,{position: "top-center" ,theme:"dark" } )
}

export const onWarning = (message)=>{
    toast.warn(message,{position:"bottom-center",theme: "dark",hideProgressBar: false})
}

export const onError = (message)=>{
    toast.error(message,{position:"bottom-center",theme: "dark"})
}


export const onInfo = (message)=>{
    toast.info(message,{position:"bottom-center",theme: "dark"})
}

export const notifyClear = () => {
    toast.dismiss();
  };