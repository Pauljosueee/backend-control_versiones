import { Module } from '@nestjs/common';
import { DetalleService } from './detalle.service';
import { DetalleController } from './detalle.controller';

@Module({
  providers: [DetalleService],
  controllers: [DetalleController]
})
export class DetalleModule {}
