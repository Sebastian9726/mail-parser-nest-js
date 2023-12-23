import { Injectable } from '@nestjs/common';


@Injectable()
export abstract class IMailMappingService {

  abstract mapppingEmail(urlOrPath: string):  Promise<any>

}
