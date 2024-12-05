import { toast } from "react-toastify"

export const onSuccess = (message:string)=>{
    toast.success(message,{position: "top-center" } )
}
export const onWarning = (message: string)=>{
    toast.warn(message,{position:"bottom-center",theme: "dark",hideProgressBar: false})
}

export const onError = (message: string)=>{
    toast.error(message,{position:"bottom-center",theme: "dark"})
}


export const onInfo = (message: string)=>{
    toast.error(message,{position:"bottom-center",theme: "dark"})
}

export const notifyClear = () => {
    toast.dismiss();
  };