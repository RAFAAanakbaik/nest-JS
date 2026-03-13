import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BcryptModule } from 'src/bcrypt/bcrypt.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, BcryptModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
