import { Test, TestingModule } from '@nestjs/testing';
import { CambiosAplicadosController } from './cambios-aplicados.controller';

describe('CambiosAplicadosController', () => {
  let controller: CambiosAplicadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CambiosAplicadosController],
    }).compile();

    controller = module.get<CambiosAplicadosController>(CambiosAplicadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
