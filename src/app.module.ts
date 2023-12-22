/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { MappingJsonModule } from './mapping-json/mapping-json.module';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    MappingJsonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
