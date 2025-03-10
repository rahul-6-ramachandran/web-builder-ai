import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UserSchemaName } from 'src/models/usermodel';

@Module({
  imports:[
    MongooseModule.forFeature([{ name : UserSchemaName , schema : UserSchema }])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports : [UserService]
})
export class UserModule {}
