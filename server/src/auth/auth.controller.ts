import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException, UnauthorizedException, Res, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { isEmail,  } from 'class-validator';
import { UserDTO } from 'src/dto/user/userdto';
import { ObjectId } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';


@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService : UserService
  ) {}



  
  //  -----    User Registration -----
  //  Method : POST
  //  Endpoint : api/auth/signup
  //  Body : email,password
  //  Params : None

  
  @Post('signup')
  async createUser(@Body() createAuthDto: UserDTO) {
    try {
      const {email,password} = createAuthDto
     
      if(!isEmail(email)) 
        throw new BadRequestException("Email is not valid")

      const userData = await this.authService.getUser(email)
      if(userData){
        throw new BadRequestException("User Already Exists.!")
      }
      else{
        
        const hashedPassword = await this.authService.hashPassword(password)
        createAuthDto.password = hashedPassword
       
        const newUser = await this.userService.createNewUser(createAuthDto)
        if(newUser){
            // getting the token
            const { access_token } =  await this.authService.generateJWT(newUser)

          newUser.password = ''
          return {
            access_token : access_token,
            userDetails : newUser
          }
        }else {
          throw new NotFoundException('Something Went Wrong')
        }
       
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
  async userLogin(
    @Body() checkAuthDto: UserDTO,
  ) {

    try {
      
      const {password , email} = checkAuthDto

    
      if(!isEmail(email)) 
        throw new BadRequestException("Email is not valid")

      // getting the user with email
      const userData = await this.authService.getUser(email)
     
      if(!userData){
        throw new UnauthorizedException("User Not Found")
      }else{
        
        // cross checking Passwords
        const passCheck = await this.authService.verifyPassword(password,userData.password)
        
        if(!passCheck){
          throw new UnauthorizedException("Password Incorrect")
        }else {

          // getting the token
          const { access_token } =  await this.authService.generateJWT(userData)

        userData.password = ''
        return {
          access_token : access_token, 
          message : "Login Successfull",
          userDetails : userData
        }
        }
        
        }
      
    } catch (error) {
      throw new UnauthorizedException({error : error.message})
    }
    
  }


  // -----------------------------


   
  //  -----  User Details Api -----
  //  Method : POST
  //  Endpoint : api/auth/:id
  //  Body : None
  //  Params : userid

  // @Post('logout')
  // async logout(){

  // }
   
  

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
