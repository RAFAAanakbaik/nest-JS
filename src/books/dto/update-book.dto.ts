import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsString()
  @IsOptional()
  title!: string;
  @IsString()
  @IsOptional()
  author!: string;
  @IsNumber()
  @IsOptional()
  year!: number;
}
