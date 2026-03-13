import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    try {
      return await this.prisma.student.create({ data: createStudentDto });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.student.findMany({});
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.student.findMany({ where: { id } });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findOneByName(name: string) {
    try {
      return await this.prisma.student.findMany({ where: { name } });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    try {
      return await this.prisma.student.update({
        where: { id },
        data: updateStudentDto,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.student.delete({ where: { id } });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
