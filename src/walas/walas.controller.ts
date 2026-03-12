import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WalasService } from './walas.service';
import { CreateWalaDto } from './dto/create-wala.dto';
import { UpdateWalaDto } from './dto/update-wala.dto';

@Controller('walas')
export class WalasController {
  constructor(private readonly walasService: WalasService) {}

  @Post()
  async create(@Body() createWalaDto: CreateWalaDto) {
    return await this.walasService.create(createWalaDto);
  }

  @Get()
  async findAll() {
    return await this.walasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.walasService.findOne(+id);
  }

  @Get(':name')
  async findOneByName(@Param('name') name: string) {
    return await this.walasService.findOneByName(name);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateWalaDto: UpdateWalaDto) {
    return await this.walasService.update(+id, updateWalaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.walasService.remove(+id);
  }
}
