import { Module } from '@nestjs/common';
import { GroupsRepository } from './repositories/groups.repository';
import { GroupsController } from './groups.controller';
import { GroupsFacade } from './groups.facade';
import { GroupsService } from './groups.service';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService, GroupsFacade, GroupsRepository],
  exports: [GroupsService, GroupsFacade, GroupsRepository],
})
export class GroupsModule {}
