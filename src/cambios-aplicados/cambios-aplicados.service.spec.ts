import { Test, TestingModule } from '@nestjs/testing';
import { cambiosAplicadosService } from './cambios-aplicados.service';

describe('CambiosAplicadosService', () => {
  let service: cambiosAplicadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [cambiosAplicadosService],
    }).compile();

    service = module.get<cambiosAplicadosService>(cambiosAplicadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
