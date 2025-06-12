import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProveedorService {
  constructor(private prisma: PrismaService) {}

  traerTodos() {
    return this.prisma.proveedor.findMany();
  }

  create(data: any) {
    return this.prisma.proveedor.create({ data });
  }

  actualizar(id: number, data: any) {
    return this.prisma.proveedor.update({
      where: { id },
      data,
    });
  }

  eliminar(id: number) {
    return this.prisma.proveedor.delete({
      where: { id },
    });
  }
}