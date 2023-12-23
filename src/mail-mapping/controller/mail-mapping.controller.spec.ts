import { Test, TestingModule } from '@nestjs/testing';
import { MailMappingController } from './mail-mapping.controller';
import { MailMappingService } from '../services/impl/mail-mapping.service';


describe('MailMappingController', () => {
  let controller: MailMappingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailMappingController],
      providers: [MailMappingService],
    }).compile();

    controller = module.get<MailMappingController>(MailMappingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
