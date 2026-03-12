import { $Enums } from '@prisma/client';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsEnum($Enums.UserRole)
  @IsNotEmpty()
  role!: $Enums.UserRole;

  @IsString()
  @IsNotEmpty()
  memberId!: number;
}
