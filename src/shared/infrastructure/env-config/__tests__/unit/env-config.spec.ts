import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { EnvConfigModule } from '../../env-config.module';

describe('EnvConfigService unit tests', () => {
  let sut: EnvConfigService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvConfigModule.forRoot()],
      providers: [EnvConfigService],
    }).compile();

    sut = module.get<EnvConfigService>(EnvConfigService);
  });

  it('should return the node env variable', () => {
    expect(sut.getNodeEnv()).toBe('test');
  });

  it('should return the app port variable', () => {
    expect(sut.getAppPort()).toBe(6666);
  });

  it('should return the jwt secret variable', () => {
    expect(sut.getJwtSecret()).toBe('test_jwt');
  });

  it('should return the jwt secret variable', () => {
    expect(sut.getJwtSecret()).toBe('test_jwt');
  });
});
