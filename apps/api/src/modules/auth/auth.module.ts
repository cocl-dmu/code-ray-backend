import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthFacade } from './auth.facade';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthFacade],
  exports: [AuthService, AuthFacade],
})
export class AuthModule {}
