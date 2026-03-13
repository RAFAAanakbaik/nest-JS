import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/authentication.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptService,
    private readonly jwt: JwtService,
  ) {}

  async auth(authDto: AuthDto) {
    try {
      const find = await this.prisma.user.findUnique({
        where: { username: authDto.username },
      });

      if (!find) {
        throw new HttpException(
          {
            message: "Can't find that username, try again later!",
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      const compare = await this.bcrypt.comparePassword(
        authDto.password,
        find.password,
      );

      if (!compare) {
        throw new HttpException(
          { message: 'Wrong password, try again later' },
          HttpStatus.BAD_REQUEST,
        );
      }

      const payload = {
        id: find.id,
        username: find.username,
        role: find.role,
      };
      const token = await this.jwt.signAsync(payload);

      return {
        id: payload.id,
        username: payload.username,
        role: payload.role,
        token,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.log(error);
      throw error;
    }
  }
}
