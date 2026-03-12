import { PartialType } from '@nestjs/mapped-types';
import { CreateWalaDto } from './create-wala.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateWalaDto extends PartialType(CreateWalaDto) {
  @IsString()
  @IsOptional()
  nama_walas!: string;
  @IsString()
  @IsOptional()
  no_tlpn!: string;
  @IsString()
  @IsOptional()
  alamat!: string;
}
