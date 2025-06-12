import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { cambiosAplicadosService } from './cambios-aplicados.service';
import { CambiosAplicadosDto } from '../dto/CambiosAplicados.Dto';

@Controller('cambios-aplicados')
export class CambiosAplicadosController {
  constructor(private readonly cambiosAplicadosService: cambiosAplicadosService) {}

  @Get()
  traerTodos() {
    return this.cambiosAplicadosService.traerTodos();
  }

  @Post()
  save(@Body() cambio: CambiosAplicadosDto) {
    return this.cambiosAplicadosService.create(cambio);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() cambio: CambiosAplicadosDto) {
    return this.cambiosAplicadosService.actualizar(Number(id), cambio);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.cambiosAplicadosService.eliminar(Number(id));
  }
}