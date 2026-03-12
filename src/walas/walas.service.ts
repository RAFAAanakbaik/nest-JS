import { Injectable } from '@nestjs/common';
import { CreateWalaDto } from './dto/create-wala.dto';
import { UpdateWalaDto } from './dto/update-wala.dto';

@Injectable()
export class WalasService {
  create(createWalaDto: CreateWalaDto) {
    return 'This action adds a new wala';
  }

  findAll() {
    return `This action returns all walas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wala`;
  }

  update(id: number, updateWalaDto: UpdateWalaDto) {
    return `This action updates a #${id} wala`;
  }

  remove(id: number) {
    return `This action removes a #${id} wala`;
  }
}
