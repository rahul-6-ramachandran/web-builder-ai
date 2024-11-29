import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModelDocument, UserSchemaName } from 'src/models/usermodel';
import { Model, ObjectId } from 'mongoose';
import { UserDTO } from 'src/dto/user/userdto';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserSchemaName)
    private readonly userModel : Model<UserModelDocument>
  ){}

  // Create New User
  async createNewUser(createUserDto:UserDTO) {
    return await this.userModel.create(createUserDto)
  }

  // Get a specific user by id
  async getSpecificUser(_id : string | ObjectId ) {
    return await this.userModel.findById(_id)
  }

  // Get a specific user by email
  async getUser(email : string) {
    return await this.userModel.findOne({email})
  }


  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
