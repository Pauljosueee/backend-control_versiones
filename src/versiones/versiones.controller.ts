import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { VersionesService } from './versiones.service';
import { VersionesDto } from '../dto/Versiones.Dto';


@Controller('versiones')
export class VersionesController {
  constructor(private readonly versionesService: VersionesService) {}

  @Get()
  traerTodos() {
    return this.versionesService.traerTodos();
  }

  @Post()
  save(@Body() version: VersionesDto) {
    return this.versionesService.create({ descripcion: version.descripcion });
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() version: VersionesDto) {
    return this.versionesService.actualizar(Number(id), { descripcion: version.descripcion });
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.versionesService.eliminar(Number(id));
  }
}