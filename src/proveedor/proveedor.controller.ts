import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorDto } from 'src/dto/Proveedor.Dto';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Get()
  traerTodos() {
    return this.proveedorService.traerTodos();
  }

  @Post()
  save(@Body() proveedor: ProveedorDto) {
    return this.proveedorService.create({ nombre: proveedor.nombre });
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() proveedor: ProveedorDto) {
    return this.proveedorService.actualizar(Number(id), { nombre: proveedor.nombre });
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.proveedorService.eliminar(Number(id));
  }
}