import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Roles } from 'src/auth/decorator/role.decorator';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Roles('PETUGAS')
  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Public()
  @Get()
  async findAll() {
    return this.booksService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Public()
  @Get(':name')
  async findOneByName(@Param('name') name: string) {
    return this.booksService.findOneByName(name);
  }

  @Roles('PETUGAS')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Roles('PETUGAS')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
