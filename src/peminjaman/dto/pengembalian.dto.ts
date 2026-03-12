import { IsNotEmpty, IsNumber } from 'class-validator';

export class PengembalianDto {
  @IsNumber()
  @IsNotEmpty()
  id_peminjaman!: number;
}
