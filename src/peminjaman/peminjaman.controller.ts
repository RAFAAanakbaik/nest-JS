import { Controller, Post, Body } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { PeminjamanDto } from './dto/peminjaman.dto';
import { PengembalianDto } from './dto/pengembalian.dto';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('pinjambalik')
export class PeminjamanController {
  constructor(private readonly peminjamanService: PeminjamanService) {}

  @Public()
  @Post('pinjam')
  async create(@Body() peminjamanDto: PeminjamanDto) {
    return await this.peminjamanService.pinjam(peminjamanDto);
  }

  @Public()
  @Post('balik')
  async update(@Body() pengembaliananDto: PengembalianDto) {
    return await this.peminjamanService.kembali(pengembaliananDto);
  }
}
