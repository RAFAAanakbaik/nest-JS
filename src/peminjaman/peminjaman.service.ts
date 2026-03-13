import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PeminjamanDto } from './dto/peminjaman.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PengembalianDto } from './dto/pengembalian.dto';

@Injectable()
export class PeminjamanService {
  constructor(private readonly prisma: PrismaService) {}

  async pinjam(peminjamanDto: PeminjamanDto) {
    try {
      const find = await this.prisma.peminjaman.findFirst({
        where: { id_book: peminjamanDto.id_book },
        orderBy: { tgl_kembali: 'asc' },
      });

      if (find?.tgl_kembali === null) {
        throw new HttpException(
          { message: 'Buku sudah dipinjam!' },
          HttpStatus.BAD_REQUEST,
        );
      }

      const add = await this.prisma.peminjaman.create({ data: peminjamanDto });

      return add;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      console.log(error);
      throw error;
    }
  }
  async kembali(pengembalianDto: PengembalianDto) {
    try {
      const add = await this.prisma.pengembalian.create({
        data: pengembalianDto,
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const updt = await this.prisma.peminjaman.update({
        where: { id: pengembalianDto.id_peminjaman },
        data: { tgl_kembali: add.tgl_kembali },
      });

      const find = await this.prisma.peminjaman.findFirst({
        where: { id: pengembalianDto.id_peminjaman },
      });

      return find;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
