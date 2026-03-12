import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BcryptModule } from 'src/bcrypt/bcrypt.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptModule,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.prisma.user.create({ data: createUserDto });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.user.findMany({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }
}
