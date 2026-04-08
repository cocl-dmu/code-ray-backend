import { Module } from '@nestjs/common';
import { ApplicantRepositoriesController } from './applicant-repositories.controller';
import { ApplicantRepositoriesFacade } from './applicant-repositories.facade';
import { ApplicantRepositoriesRepository } from './applicant-repositories.repository';
import { ApplicantRepositoriesService } from './applicant-repositories.service';

@Module({
  controllers: [ApplicantRepositoriesController],
  providers: [
    ApplicantRepositoriesService,
    ApplicantRepositoriesFacade,
    ApplicantRepositoriesRepository,
  ],
  exports: [
    ApplicantRepositoriesService,
    ApplicantRepositoriesFacade,
    ApplicantRepositoriesRepository,
  ],
})
export class ApplicantRepositoriesModule {}
