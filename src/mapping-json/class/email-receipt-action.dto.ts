import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsNotEmpty,
  ValidateNested,
  IsNumber,
  IsBoolean,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';
import { Expose, Type } from 'class-transformer';
import { IsNotEmptyObject, IsString, ArrayMinSize, IsArray } from 'class-validator';


export class commonHeadersDto {
  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'returnPath' })
  @ApiProperty({
    description: 'return Path'
  })
  @AutoMap()
  returnPath: string;


  @ArrayMinSize(1, { message: 'Should be at least a element' })
  @IsArray({ message: 'Should be a array' })
  @IsString({ each: true, message: 'Everyone should be a string' })
  @ApiProperty({
    description: 'from'
  })
  @Type(() => String)
  @Expose({ name: 'from' })
  @AutoMap()
  from: string[];

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'date' })
  @ApiProperty({
    description: 'date'
  })
  @AutoMap()
  date: string;

  @ArrayMinSize(1, { message: 'Should be at least a element' })
  @IsArray({ message: 'Should be a array' })
  @IsString({ each: true, message: 'Everyone should be a string' })
  @ApiProperty({
    description: 'to'
  })
  @Type(() => String)
  @Expose({ name: 'to' })
  @AutoMap()
  to: string[];

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'messageId' })
  @ApiProperty({
    description: 'message Id'
  })
  @AutoMap()
  messageId: string;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'subject' })
  @ApiProperty({
    description: 'subject'
  })
  @AutoMap()
  subject: string;
}


export class headersDto {
  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'name' })
  @ApiProperty({
    description: 'name'
  })
  @AutoMap()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'value' })
  @ApiProperty({
    description: 'value'
  })
  @AutoMap()
  value: string;
}

export class mailDto {
  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'timestamp' })
  @ApiProperty({
    description: 'timestamp'
  })
  @AutoMap()
  timestamp: string;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'source' })
  @ApiProperty({
    description: 'source'
  })
  @AutoMap()
  source: string;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'messageId' })
  @ApiProperty({
    description: 'messageId'
  })
  @AutoMap()
  messageId: string;

  @ArrayMinSize(1, { message: 'Should be at least a element' })
  @IsArray({ message: 'Should be a array' })
  @IsString({ each: true, message: 'Everyone should be a string' })
  @ApiProperty({
    description: 'destination'
  })
  @Type(() => String)
  @Expose({ name: 'destination' })
  @AutoMap()
  destination: string[];

  @IsNotEmpty()
  @IsBoolean()
  @Expose({ name: 'headersTruncated' })
  @ApiProperty({
    description: 'headersTruncated'
  })
  @AutoMap()
  headersTruncated: boolean;

  @ApiProperty({ type: headersDto })
  @Expose({ name: 'headers' })
  @ValidateNested({ each: true })
  @Type(() => headersDto)
  @ArrayMinSize(1, { message: 'headers Should be at least a element' })
  @IsArray({ message: 'headers Should be a array' })
  @AutoMap(() => [headersDto])
  headers: headersDto[];

  @ApiProperty({ type: commonHeadersDto })
  @Expose({ name: 'commonHeaders' })
  @ValidateNested({ each: true })
  @Type(() => commonHeadersDto)
  @IsNotEmptyObject()
  @AutoMap(() => commonHeadersDto)
  commonHeaders: commonHeadersDto
}

export class spamVerdictDto {
  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'status' })
  @ApiProperty({
    description: 'status'
  })
  @AutoMap()
  status: string;
}

export class actionDto {

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'type' })
  @ApiProperty({
    description: 'type'
  })
  @AutoMap()
  type: string;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'topicArn' })
  @ApiProperty({
    description: 'topic Arn'
  })
  @AutoMap()
  topicArn: string;
}

export class receiptdDto {
  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'timestamp' })
  @ApiProperty({
    description: 'time stamp'
  })
  @AutoMap()
  timestamp: string;

  @IsNotEmpty()
  @IsNumber()
  @Expose({ name: 'processingTimeMillis' })
  @ApiProperty({
    description: 'processing Time Millis'
  })
  @AutoMap()
  processingTimeMillis: number;

  @ArrayMinSize(1, { message: 'Should be at least a element' })
  @IsArray({ message: 'Should be a array' })
  @IsString({ each: true, message: 'Everyone should be a string' })
  @ApiProperty({
    description: 'recipients'
  })
  @Type(() => String)
  @Expose({ name: 'recipients' })
  @AutoMap()
  recipients: string[];


  @AutoMap(() => spamVerdictDto)
  @ApiProperty({ type: spamVerdictDto })
  @ValidateNested()
  @Expose({ name: 'spamVerdict' })
  @IsNotEmptyObject()
  @Type(() => spamVerdictDto)
  spamVerdict: spamVerdictDto;

  @AutoMap(() => spamVerdictDto)
  @ApiProperty({ type: spamVerdictDto })
  @ValidateNested()
  @Expose({ name: 'virusVerdict' })
  @IsNotEmptyObject()
  @Type(() => spamVerdictDto)
  virusVerdict: spamVerdictDto;

  @AutoMap(() => spamVerdictDto)
  @ApiProperty({ type: spamVerdictDto })
  @ValidateNested()
  @Expose({ name: 'spfVerdict' })
  @IsNotEmptyObject()
  @Type(() => spamVerdictDto)
  spfVerdict: spamVerdictDto;


  @AutoMap(() => spamVerdictDto)
  @ApiProperty({ type: spamVerdictDto })
  @ValidateNested()
  @Expose({ name: 'dkimVerdict' })
  @IsNotEmptyObject()
  @Type(() => spamVerdictDto)
  dkimVerdict: spamVerdictDto;


  @AutoMap(() => spamVerdictDto)
  @ApiProperty({ type: spamVerdictDto })
  @ValidateNested()
  @Expose({ name: 'dmarcVerdict' })
  @IsNotEmptyObject()
  @Type(() => spamVerdictDto)
  dmarcVerdict: spamVerdictDto;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'dmarcPolicy' })
  @ApiProperty({
    description: 'dmarc Policy'
  })
  @AutoMap()
  dmarcPolicy: string;

  @AutoMap(() => actionDto)
  @ApiProperty({ type: actionDto })
  @ValidateNested()
  @Expose({ name: 'action' })
  @IsNotEmptyObject()
  @Type(() => actionDto)
  action: actionDto;
}

export class SesDto {
  @AutoMap(() => receiptdDto)
  @ApiProperty({ type: receiptdDto })
  @ValidateNested()
  @Expose({ name: 'receipt' })
  @IsNotEmptyObject({ nullable: false }, { message: "This field (receipt) is required " })
  @Type(() => receiptdDto)
  receipt: receiptdDto;

  @AutoMap(() => mailDto)
  @ValidateNested()
  @ApiProperty({ type: mailDto })
  @Expose({ name: 'mail' })
  @IsNotEmptyObject({ nullable: false }, { message: "This field (mail) is required" })
  @Type(() => mailDto)
  mail: mailDto;
}

export class RecordsDto {
  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'eventVersion' })
  @ApiProperty({
    description: 'event version'
  })
  @Type(() => String)
  @AutoMap()
  eventVersion: string;

  @AutoMap(() => SesDto)
  @ApiProperty({ type: SesDto })
  @Expose({ name: 'ses' })
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => SesDto)
  ses: SesDto;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'eventSource' })
  @ApiProperty({
    description: 'event source'
  })
  @AutoMap()
  @Type(() => String)
  eventSource: string;
}

export class EmailReceiptActionDto {

  @ApiProperty({ type: RecordsDto })
  @Expose({ name: 'Records' })
  @ValidateNested({ each: true })
  @Type(() => RecordsDto)
  @ArrayMinSize(1, { message: 'Records Should be at least a element' })
  @IsArray({ message: 'Records Should be a array' })
  @AutoMap(() => [RecordsDto])
  Records: RecordsDto[];
}













