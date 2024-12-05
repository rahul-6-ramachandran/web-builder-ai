import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {ExtractJWT, Strategy } from 'passport-jwt'

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey : process.env.JWT_SECRET 
        })
    }


    async validate(payload : any){
        return { userId : payload.user_id, email : payload.email }
    }
}