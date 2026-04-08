import { Test } from '@nestjs/testing';
import { AppModule } from '../../apps/worker/src/app.module';

describe.skip('Worker smoke test placeholder', () => {
  it('boots the worker application module', async () => {
    const testingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    expect(testingModule).toBeDefined();
  });
});
