import { IsNotEmpty, IsNumber } from 'class-validator';

export class PeminjamanDto {
  @IsNumber()
  @IsNotEmpty()
  id_student!: number;
  @IsNumber()
  @IsNotEmpty()
  id_book!: number;
}
