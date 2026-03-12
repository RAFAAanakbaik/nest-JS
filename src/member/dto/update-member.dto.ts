import { PartialType } from '@nestjs/swagger';
import { CreateMemberDto } from './create-member.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {
  @IsString()
  @IsOptional()
  name!: string;
  @IsString()
  @IsOptional()
  className!: string;
}
