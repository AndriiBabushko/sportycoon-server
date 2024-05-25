import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopResolver } from './shop.resolver';
import { PrismaService } from '@prisma/prisma.service';

@Module({
  providers: [ShopService, ShopResolver, PrismaService],
})
export class ShopModule {}
