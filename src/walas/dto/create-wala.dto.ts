import { IsString, IsNotEmpty } from 'class-validator';

export class CreateWalaDto {
  @IsString()
  @IsNotEmpty()
  nama_walas!: string;
  @IsString()
  @IsNotEmpty()
  no_tlpn!: string;
  @IsString()
  @IsNotEmpty()
  alamat!: string;
}
