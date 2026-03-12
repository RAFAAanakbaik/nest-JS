import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsString()
  @IsOptional()
  nis!: string;

  @IsString()
  @IsOptional()
  name!: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  kelas!: string;

  @IsString()
  @IsOptional()
  jurusan!: string;
}
