import Axios from "../../config/axios"
import { CreateProject } from "../../types.dto";

export const createNewProject = async(body : CreateProject)=>{
    const response = await Axios.post('api/project',body)
    return response;
}