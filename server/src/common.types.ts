

export interface UserPayload {
    userId : string,
    email : string
}


export type AuthRequest = Request & { user: UserPayload };