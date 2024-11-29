import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UserSchemaName } from 'src/models/usermodel';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: UserSchemaName,schema: UserSchema}
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
