import { Test, TestingModule } from '@nestjs/testing';
import { DetalleController } from './detalle.controller';

describe('DetalleController', () => {
  let controller: DetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleController],
    }).compile();

    controller = module.get<DetalleController>(DetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
