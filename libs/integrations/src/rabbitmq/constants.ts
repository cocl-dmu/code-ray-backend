export const RABBITMQ_EXCHANGES = {
  ANALYSIS_RUNS: 'analysis.runs',
} as const;

export const RABBITMQ_QUEUES = {
  ANALYSIS_REQUESTS: 'analysis.requests',
  QUESTION_GENERATION: 'analysis.question-generation',
} as const;
