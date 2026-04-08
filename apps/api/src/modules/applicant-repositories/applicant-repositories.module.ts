import { Module } from '@nestjs/common';
import { ApplicantRepositoriesController } from './applicant-repositories.controller';
import { ApplicantRepositoriesFacade } from './applicant-repositories.facade';
import { ApplicantRepositoriesService } from './applicant-repositories.service';
import { ApplicantRepositoriesRepository } from './repositories/applicant-repositories.repository';
import { RepositoryFilesRepository } from './repositories/repository-files.repository';
import { RepositoryUrlParserService } from './services/repository-url-parser.service';

@Module({
  controllers: [ApplicantRepositoriesController],
  providers: [
    ApplicantRepositoriesService,
    ApplicantRepositoriesFacade,
    RepositoryUrlParserService,
    ApplicantRepositoriesRepository,
    RepositoryFilesRepository,
  ],
  exports: [
    ApplicantRepositoriesService,
    ApplicantRepositoriesFacade,
    RepositoryUrlParserService,
    ApplicantRepositoriesRepository,
    RepositoryFilesRepository,
  ],
})
export class ApplicantRepositoriesModule {}
