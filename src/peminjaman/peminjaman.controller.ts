import { Controller, Post, Body } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { PeminjamanDto } from './dto/peminjaman.dto';
import { PengembalianDto } from './dto/pengembalian.dto';

@Controller('pinjambalik')
export class PeminjamanController {
  constructor(private readonly peminjamanService: PeminjamanService) {}

  @Post('pinjam')
  async create(@Body() peminjamanDto: PeminjamanDto) {
    return await this.peminjamanService.pinjam(peminjamanDto);
  }

  @Post('balik')
  async update(@Body() pengembaliananDto: PengembalianDto) {
    return await this.peminjamanService.kembali(pengembaliananDto);
  }
}
