import { ProjectData } from "grapesjs";
import Axios from "../../config/axios"


export const createNewProject = async(body : ProjectData)=>{
    const response = await Axios.post('api/project',body)
    return response;
}