import { Module } from '@nestjs/common';
import { cambiosAplicadosService } from './cambios-aplicados.service';
import { CambiosAplicadosController } from './cambios-aplicados.controller';

@Module({
  providers: [cambiosAplicadosService],
  controllers: [CambiosAplicadosController]
})
export class CambiosAplicadosModule {}
