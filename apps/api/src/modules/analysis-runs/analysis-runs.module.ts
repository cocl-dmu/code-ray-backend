import { Module } from '@nestjs/common';
import { AnalysisRunsController } from './analysis-runs.controller';
import { AnalysisRunsFacade } from './analysis-runs.facade';
import { AnalysisRunsRepository } from './analysis-runs.repository';
import { AnalysisRunsService } from './analysis-runs.service';

@Module({
  controllers: [AnalysisRunsController],
  providers: [AnalysisRunsService, AnalysisRunsFacade, AnalysisRunsRepository],
  exports: [AnalysisRunsService, AnalysisRunsFacade, AnalysisRunsRepository],
})
export class AnalysisRunsModule {}
