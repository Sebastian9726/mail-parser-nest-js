import { IsNotEmptyObject, IsString, ArrayMinSize, IsArray } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { IsBoolean } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TargetDto {

  @IsBoolean()
  @ApiProperty({
    description: 'spam'
  })
  @Expose({ name: 'spam' })
  spam: boolean;

  @IsBoolean()
  @ApiProperty({
    description: 'virus'
  })
  @Expose({ name: 'virus' })
  virus: boolean;

  @IsBoolean()
  @ApiProperty({
    description: 'dns'
  })
  @Expose({ name: 'dns' })
  dns: boolean;

  @IsString()
  @ApiProperty({
    description: 'mes'
  })
  @Expose({ name: 'mes' })
  mes: string;

  @IsBoolean()
  @ApiProperty({
    description: 'retrasado'
  })
  @Expose({ name: 'retrasado' })
  retrasado: boolean;

  @IsString()
  @ApiProperty({
    description: 'emisor'
  })
  @Expose({ name: 'emisor' })
  emisor: string;

  @IsString()
  @ApiProperty({
    description: 'receptor'
  })
  @Type(() => String)
  @Expose({ name: 'receptor' })
  receptor: string[];
}