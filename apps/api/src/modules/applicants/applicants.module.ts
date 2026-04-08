import { Module } from '@nestjs/common';
import { ApplicantsController } from './applicants.controller';
import { ApplicantsFacade } from './applicants.facade';
import { ApplicantsRepository } from './applicants.repository';
import { ApplicantsService } from './applicants.service';

@Module({
  controllers: [ApplicantsController],
  providers: [ApplicantsService, ApplicantsFacade, ApplicantsRepository],
  exports: [ApplicantsService, ApplicantsFacade, ApplicantsRepository],
})
export class ApplicantsModule {}
