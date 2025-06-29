
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from 'src/middlewares/auth.guard';


@Module({
  imports: [JwtModule.register({ secret: 'your_secret_key' })],
  providers: [AuthGuard],
  exports: [JwtModule, AuthGuard],
})
export class SharedModule {}
