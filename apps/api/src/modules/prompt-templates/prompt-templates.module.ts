import { Module } from '@nestjs/common';
import { PromptTemplatesController } from './prompt-templates.controller';
import { PromptTemplatesFacade } from './prompt-templates.facade';
import { PromptTemplatesRepository } from './repositories/prompt-templates.repository';
import { PromptTemplatesService } from './prompt-templates.service';

@Module({
  controllers: [PromptTemplatesController],
  providers: [
    PromptTemplatesService,
    PromptTemplatesFacade,
    PromptTemplatesRepository,
  ],
  exports: [
    PromptTemplatesService,
    PromptTemplatesFacade,
    PromptTemplatesRepository,
  ],
})
export class PromptTemplatesModule {}
