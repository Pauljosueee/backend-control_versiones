import { Body, Controller, Get, Post, Put,  Delete, Param } from '@nestjs/common';
import { InstitucionService } from './institucion.service';
import { InstitucionDto } from 'src/dto/Institucion.Dto';

@Controller('institucion')
export class InstitucionController {
  constructor(private readonly institucionService: InstitucionService) { }

  @Get()
  traerTodos() {
    return this.institucionService.traerTodos();
  }

  @Post()
  save(@Body() institucion: InstitucionDto) {
    const data = {
      nombre: institucion.nombre,
      fecha_contrato: institucion.fecha,
      id_proveedor: institucion.proveedor,
    };
    return this.institucionService.create(data);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() institucion: InstitucionDto) {
    const data = {
      nombre: institucion.nombre,
      fecha_contrato: institucion.fecha,
      id_proveedor: institucion.proveedor,
    };
    return this.institucionService.actualizar(Number(id), data);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.institucionService.eliminar(Number(id));
  }
}
