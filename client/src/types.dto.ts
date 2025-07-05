import { ProjectData } from "grapesjs"

export interface CreateUser{
    email: string,
    password : string
}

export type SuccessProps = {
    message : string
}

export interface UserDetails{
    user_id : string
    email : string

}

export interface Project{
    title : string
    project : ProjectData
    hosted : boolean
    description : string
    hostedURL : string
}


// export interface ProjectData {
//     html : string
//     css : string
//     components : any []
//     styles : any []
//     dataSources : any []
//     assets : any []
//     symbols : any []
//     pages : any []

// }
