import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InstitucionService {
  constructor(private prisma: PrismaService) { }

  traerTodos() {
    return this.prisma.institucion.findMany({
      include: {
        proveedor: {
          select: {
            nombre: true,
          },
        }
      }
    });
  }

  create(data: any) {
    return this.prisma.institucion.create({ data });
  }

  actualizar(id: number, data: any) {
    return this.prisma.institucion.update({
      where: { id },
      data,
    });
  }

  eliminar(id: number) {
    return this.prisma.institucion.delete({
      where: { id },
    });
  }
}


