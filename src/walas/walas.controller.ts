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
import { Roles } from 'src/auth/decorator/role.decorator';

@Controller('walas')
export class WalasController {
  constructor(private readonly walasService: WalasService) {}

  @Roles('ADMIN')
  @Post()
  async create(@Body() createWalaDto: CreateWalaDto) {
    return await this.walasService.create(createWalaDto);
  }

  @Roles('ADMIN')
  @Get()
  async findAll() {
    return await this.walasService.findAll();
  }

  @Roles('ADMIN')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.walasService.findOne(+id);
  }

  @Roles('ADMIN')
  @Get(':name')
  async findOneByName(@Param('name') name: string) {
    return await this.walasService.findOneByName(name);
  }

  @Roles('ADMIN')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateWalaDto: UpdateWalaDto) {
    return await this.walasService.update(+id, updateWalaDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.walasService.remove(+id);
  }
}
