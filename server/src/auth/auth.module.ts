import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UserSchemaName } from 'src/models/usermodel';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ,
      signOptions : { expiresIn : '12h' }
    }),
    MongooseModule.forFeature([
      {name: UserSchemaName,schema: UserSchema}
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
