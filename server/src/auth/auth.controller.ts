import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { isEmail,  } from 'class-validator';
import { UserDTO } from 'src/dto/user/userdto';
import { ObjectId } from 'mongoose';


@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}



  
  //  -----    User Registration -----
  //  Method : POST
  //  Endpoint : api/auth/signup
  //  Body : email,password
  //  Params : None

  @Post('signup')
  async createUser(@Body() createAuthDto: UserDTO) {
    try {
      const {email} = createAuthDto
      if(!isEmail(email)) 
        throw new BadRequestException("Email is not valid")

      const userData = await this.authService.getUser(email)
      if(userData){
        throw new BadRequestException("User Already Exists.!")
      }else{
        const newUser = await this.authService.createNewUser(createAuthDto)
        newUser.password = ''
        return newUser
      }
    } catch (error) {
      throw new NotFoundException({error: error.message})
    }
  }

  // -----------------------------


  //  -----  User Login -----
  //  Method : POST
  //  Endpoint : api/auth/login
  //  Body : email,password
  //  Params : None

  @Post('login')
  async userLogin(@Body() createAuthDto: UserDTO) {
    try {
      
      const {email} = createAuthDto
      if(!isEmail(email)) 
        throw new BadRequestException("Email is not valid")

      const userData = await this.authService.getUser(email)
      if(!userData){
        throw new BadRequestException("User Not Found")
      }
      userData.password = ''
      return userData

    } catch (error) {
      throw new NotFoundException({error : error.message})
    }
    
  }

  // -----------------------------

   
  //  -----  User Details Api -----
  //  Method : POST
  //  Endpoint : api/auth/:id
  //  Body : None
  //  Params : userid
  
  @Get(':id')
  async getUser(@Param('id') id: string |  ObjectId) {
    return this.authService.getSpecificUser(id);
  }

    // -----------------------------

  
  
  // @Get(':id')
  // findAll() {
  //   return this.authService.findAll();
  // }


  

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
