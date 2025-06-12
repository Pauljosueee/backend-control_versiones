import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class cambiosAplicadosService {
  constructor(private prisma: PrismaService) {}

  traerTodos() {
    return this.prisma.cambiosAplicados.findMany();
  }

  create(data: any) {
    return this.prisma.cambiosAplicados.create({ data });
  }

  actualizar(id: number, data: any) {
    return this.prisma.cambiosAplicados.update({
      where: { id },
      data,
    });
  }

  eliminar(id: number) {
    return this.prisma.cambiosAplicados.delete({
      where: { id },
    });
  }
}