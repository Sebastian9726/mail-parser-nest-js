import { Test, TestingModule } from '@nestjs/testing';
import { MailMappingService } from './mail-mapping.service';

describe('MailMappingService', () => {
  let service: MailMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailMappingService],
    }).compile();

    service = module.get<MailMappingService>(MailMappingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
