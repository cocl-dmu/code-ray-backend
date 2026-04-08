import { Module } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { UsersController } from './users.controller';
import { UsersFacade } from './users.facade';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersFacade, UsersRepository],
  exports: [UsersService, UsersFacade, UsersRepository],
})
export class UsersModule {}
