import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { Public } from 'src/auth/decorator/public.decorator';
import { Roles } from 'src/auth/decorator/role.decorator';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptService,
  ) {}

  @Public()
  async create(createUserDto: CreateUserDto) {
    const hashed = await this.bcrypt.hashPassword(createUserDto.password);
    try {
      return await this.prisma.user.create({
        data: { ...createUserDto, password: hashed },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Roles('ADMIN')
  async findAll() {
    try {
      return await this.prisma.user.findMany({});
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Public()
  async findOne(id: number) {
    try {
      return await this.prisma.user.findMany({ where: { id } });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Public()
  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Public()
  async remove(id: number) {
    try {
      return await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
