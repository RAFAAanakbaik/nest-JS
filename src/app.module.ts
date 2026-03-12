import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { WalasModule } from './walas/walas.module';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { PeminjamanModule } from './peminjaman/peminjaman.module';
import { BcryptModule } from './bcrypt/bcrypt.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    BooksModule,
    WalasModule,
    AuthModule,
    StudentModule,
    PeminjamanModule,
    BcryptModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
