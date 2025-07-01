

export interface UserPayload {
    user_id : string,
    email : string
}




export type AuthRequest = Request & { user: UserPayload };