import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDTO } from 'src/dto/user/userdto';
import { AuthGuard } from '@nestjs/passport';
import { ObjectId } from 'mongoose';
import {  AuthRequest } from 'src/common.types';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: UserDTO) {
  //   return this.userService.create(createUserDto);
  // }

  //  -----  User Details Api -----
  //  Method : POST
  //  Endpoint : api/auth/:id
  //  Body : None
  //  Params : userid
  
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getUser(
    @Req() request : AuthRequest,
    @Param('id') id: string |  ObjectId
  ) {
    console.log('request',request.user)
    return this.userService.getSpecificUser(id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
