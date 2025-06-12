import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { VersionesModule } from './versiones/versiones.module';
import { CambiosAplicadosModule } from './cambios-aplicados/cambios-aplicados.module';
import { DetalleModule } from './detalle/detalle.module';
import { InstitucionModule } from './institucion/institucion.module';

@Module({
  imports: [PrismaModule, ProveedorModule, VersionesModule, CambiosAplicadosModule, DetalleModule, InstitucionModule],
})
export class AppModule {}