import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { SharedModule } from './shared.module';

@Module({
  
  // for accessing .env variables globally
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // MongoDB Connection
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      inject : [ConfigService],
      useFactory : (configService : ConfigService) =>({
        uri : configService.get<string>('DB_URL')
      })
    }),
    
    AuthModule,
    SharedModule,
    UserModule,
    
    ProjectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
