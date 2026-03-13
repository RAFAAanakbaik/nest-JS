import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Roles } from 'src/auth/decorator/role.decorator';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Public()
  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return await this.studentService.create(createStudentDto);
  }

  @Roles('ADMIN')
  @Get()
  async findAll() {
    return await this.studentService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.studentService.findOne(+id);
  }

  @Public()
  @Get(':name')
  async findOnebyName(@Param('name') name: string) {
    return await this.studentService.findOneByName(name);
  }

  @Public()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return await this.studentService.update(+id, updateStudentDto);
  }

  @Public()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.studentService.remove(+id);
  }
}
