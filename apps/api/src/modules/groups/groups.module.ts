import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsFacade } from './groups.facade';
import { GroupsRepository } from './groups.repository';
import { GroupsService } from './groups.service';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService, GroupsFacade, GroupsRepository],
  exports: [GroupsService, GroupsFacade, GroupsRepository],
})
export class GroupsModule {}
