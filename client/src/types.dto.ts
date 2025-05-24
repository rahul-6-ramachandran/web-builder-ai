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