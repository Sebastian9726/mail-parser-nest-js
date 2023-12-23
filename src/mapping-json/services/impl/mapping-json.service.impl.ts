import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { IMappingJsonService } from '../mapping-json.service';
import { EmailReceiptActionDto } from '../../../mapping-json/class/email-receipt-action.dto';
import { TargetDto } from '../../../mapping-json/class/target.dto';


@Injectable()
export class MappingJsonService implements IMappingJsonService {

  constructor(
    @InjectMapper() private readonly classMapper: Mapper
  ) { }

  mapppingFields(createMappingJsonDto: EmailReceiptActionDto):TargetDto {
    try {
      const response:TargetDto =  this.classMapper.map(
        createMappingJsonDto,
        EmailReceiptActionDto,
        TargetDto
      );
      return response
    } catch (error) {
      throw new HttpException('Error when the server IS trying to transform the input', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }


}
