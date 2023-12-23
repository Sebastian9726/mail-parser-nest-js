import { Module } from '@nestjs/common';
import { MailMappingController } from './controller/mail-mapping.controller';
import { MailMappingService } from './services/impl/mail-mapping.service';
import { IMailMappingService } from './services/mail-mapping.service.impl';

@Module({
  controllers: [MailMappingController],
  providers: [
    MailMappingService,
    { provide: IMailMappingService, useClass: MailMappingService },
  ],
})
export class MailMappingModule {}
