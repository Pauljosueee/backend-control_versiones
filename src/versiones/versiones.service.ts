import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VersionesService {
  constructor(private prisma: PrismaService) {}

  traerTodos() {
    return this.prisma.versiones.findMany();
  }

  create(data: any) {
    return this.prisma.versiones.create({ data });
  }

  actualizar(id: number, data: any) {
    return this.prisma.versiones.update({
      where: { id },
      data,
    });
  }

  eliminar(id: number) {
    return this.prisma.versiones.delete({
      where: { id },
    });
  }
}