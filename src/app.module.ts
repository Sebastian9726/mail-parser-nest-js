/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { MappingJsonModule } from './mapping-json/mapping-json.module';
import { MailMappingModule } from './mail-mapping/mail-mapping.module';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    MappingJsonModule,
    MailMappingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
