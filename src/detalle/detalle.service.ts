import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DetalleService {
  constructor(private prisma: PrismaService) {}

  traerTodos() {
    return this.prisma.detalle.findMany();
  }

  create(data: any) {
    return this.prisma.detalle.create({ data });
  }

  actualizar(id: number, data: any) {
    return this.prisma.detalle.update({
      where: { id },
      data,
    });
  }

  eliminar(id: number) {
    return this.prisma.detalle.delete({
      where: { id },
    });
  }
}