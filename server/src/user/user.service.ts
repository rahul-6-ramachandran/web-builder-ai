import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDTO } from 'src/dto/user/userdto';
import { UserModelDocument, UserSchema, UserSchemaName } from 'src/models/usermodel';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserSchemaName)
    private readonly userModel : Model<UserModelDocument>
  ){}
  

  async createNewUser(createUserDto:UserDTO) {
    return await this.userModel.create(createUserDto)
  }

  async getSpecificUser(_id : string | ObjectId ) {
    return await this.userModel.findById(_id)
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
