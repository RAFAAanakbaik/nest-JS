import { Module } from '@nestjs/common';
import { WalasService } from './walas.service';
import { WalasController } from './walas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WalasController],
  providers: [WalasService],
})
export class WalasModule {}
