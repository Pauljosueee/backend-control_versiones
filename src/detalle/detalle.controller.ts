import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { DetalleService } from './detalle.service';
import { DetalleDto } from 'src/dto/Detalle.Dto';

@Controller('detalle')
export class DetalleController {
  constructor(private readonly detalleService: DetalleService) {}

  @Get()
  traerTodos() {
    return this.detalleService.traerTodos();
  }

  @Post()
  save(@Body() detalle: DetalleDto) {
    return this.detalleService.create(detalle);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() detalle: DetalleDto) {
    return this.detalleService.actualizar(Number(id), detalle);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.detalleService.eliminar(Number(id));
  }
}