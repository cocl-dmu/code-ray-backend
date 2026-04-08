import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersFacade } from './users.facade';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersFacade, UsersRepository],
  exports: [UsersService, UsersFacade, UsersRepository],
})
export class UsersModule {}
