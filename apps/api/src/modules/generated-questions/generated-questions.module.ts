import { Module } from '@nestjs/common';
import { GeneratedQuestionsController } from './generated-questions.controller';
import { GeneratedQuestionsFacade } from './generated-questions.facade';
import { GeneratedQuestionsRepository } from './generated-questions.repository';
import { GeneratedQuestionsService } from './generated-questions.service';

@Module({
  controllers: [GeneratedQuestionsController],
  providers: [
    GeneratedQuestionsService,
    GeneratedQuestionsFacade,
    GeneratedQuestionsRepository,
  ],
  exports: [
    GeneratedQuestionsService,
    GeneratedQuestionsFacade,
    GeneratedQuestionsRepository,
  ],
})
export class GeneratedQuestionsModule {}
