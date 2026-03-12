import { IsString, IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  nis!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  email?: string;

  @IsString()
  @IsNotEmpty()
  kelas!: string;

  @IsString()
  @IsNotEmpty()
  jurusan!: string;
}
