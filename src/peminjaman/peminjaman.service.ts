import { Injectable } from '@nestjs/common';
import { PeminjamanDto } from './dto/peminjaman.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PengembalianDto } from './dto/pengembalian.dto';

@Injectable()
export class PeminjamanService {
  constructor(private readonly prisma: PrismaService) {}

  pinjam(peminjamanDto: PeminjamanDto) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  kembali(pengembalianDto: PengembalianDto) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}
