import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModelDocument, UserSchemaName } from 'src/models/usermodel';
import { Model, ObjectId } from 'mongoose';
import { UserDTO } from 'src/dto/user/userdto';

import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserSchemaName)
    private readonly userModel : Model<UserModelDocument>,
    
    private readonly jwtService: JwtService

  ){}

  // Create New User
  
  // Get a specific user by id
  

  // Get a specific user by email
  async getUser(email : string) {
    return await this.userModel.findOne({email})
  }

  // Login and jwt token
  async generateJWT(user : any){
    const payload = { email : user.email , user_id : user._id }
    const token = this.jwtService.sign(payload)

    return { 
      access_token  : token 
    }
   
  }


  async hashPassword(plainPassword: string){
    const saltRounds = 5
    return bcrypt.hash(plainPassword,saltRounds)
  }

  async verifyPassword(plainPassword:string,hashedPassword: string){
    return bcrypt.compare(plainPassword,hashedPassword)
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
