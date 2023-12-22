/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { MappingProfile } from './auto-mapper-profile.provider';
import { MappingJsonController } from './controller/mapping-json.controller';
import { MappingJsonService } from './services/impl/mapping-json.service.impl';
import { IMappingJsonService } from './services/mapping-json.service';

@Module({
  controllers: [MappingJsonController],
  providers: [
    MappingProfile,
    { provide: IMappingJsonService, useClass: MappingJsonService },
  ],
})
export class MappingJsonModule { }
