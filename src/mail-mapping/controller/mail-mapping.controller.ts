import { Controller, Get, Param } from '@nestjs/common';
import { IMailMappingService } from '../services/mail-mapping.service.impl';


@Controller('mail-mapping')
export class MailMappingController {
  constructor(private readonly mailMappingService: IMailMappingService) {}

  @Get(':urlOrPath')
  async getEmailJson(@Param('urlOrPath') urlOrPath: string): Promise<any> {
    const json = await this.mailMappingService.mapppingEmail(urlOrPath);
    return json;
  }
}
