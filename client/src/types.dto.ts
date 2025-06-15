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
    project : any
    hosted : boolean
    description : string
    hostedURL : string
}