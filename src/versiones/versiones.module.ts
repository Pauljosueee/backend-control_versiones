import { Module } from '@nestjs/common';
import { VersionesService } from './versiones.service';
import { VersionesController } from './versiones.controller';

@Module({
  providers: [VersionesService],
  controllers: [VersionesController]
})
export class VersionesModule {}
