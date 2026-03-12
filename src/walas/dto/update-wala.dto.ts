import { PartialType } from '@nestjs/mapped-types';
import { CreateWalaDto } from './create-wala.dto';

export class UpdateWalaDto extends PartialType(CreateWalaDto) {}
