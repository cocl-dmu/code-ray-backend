import { Test } from '@nestjs/testing';
import { AppModule } from '../../apps/api/src/app.module';

describe.skip('API smoke test placeholder', () => {
  it('boots the API application module', async () => {
    const testingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    expect(testingModule).toBeDefined();
  });
});
