import { ProjectData } from "grapesjs";
import Axios from "../../config/axios"


export const createNewProject = async(body : ProjectData)=>{
    const response = await Axios.post('api/project',body)
    return response;
}

export const getUserProjects = async ()=>{
    const response = await Axios.get('api/project')
    return response.data
}