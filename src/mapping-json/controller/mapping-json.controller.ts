import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { EmailReceiptActionDto } from '../class/email-receipt-action.dto';
import { IMappingJsonService } from '../services/mapping-json.service';
import { TargetDto } from '../class/target.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('mapping-json')
export class MappingJsonController {
  constructor(private readonly mappingJsonService: IMappingJsonService) {}
  @Post()
  @ApiResponse({
    status: 200,
    description: 'Input mapped succesfull',
    type: TargetDto,
  })
  @HttpCode(HttpStatus.OK)
  mapping(@Body() createMappingJsonDto: EmailReceiptActionDto):TargetDto {
    return this.mappingJsonService.mapppingFields(createMappingJsonDto);
  }
}
