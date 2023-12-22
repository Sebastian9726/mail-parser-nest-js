import { Injectable } from '@nestjs/common';
import { TargetDto } from '../class/target.dto';
import { EmailReceiptActionDto } from '../class/email-receipt-action.dto';


@Injectable()
export abstract class IMappingJsonService {

  abstract mapppingFields(createMappingJsonDto: EmailReceiptActionDto): TargetDto

}
