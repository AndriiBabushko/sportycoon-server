import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateShopItemInput } from './input/create-shop-item.input';
import { UpdateShopItemInput } from './input/update-shop-item.input';
import { ShopItem } from './entities';

@Injectable()
export class ShopService {
  constructor(private readonly prismaService: PrismaService) {}

  // Shop Item Methods
  async getShopItems() {
    return this.prismaService.shopItem.findMany();
  }

  async createShopItem(data: CreateShopItemInput) {
    return this.prismaService.shopItem.create({ data });
  }

  async getShopItemById(id: string) {
    return this.prismaService.shopItem.findUnique({ where: { id } });
  }

  async updateShopItem(id: string, data: UpdateShopItemInput) {
    return this.prismaService.shopItem.update({ where: { id }, data });
  }

  async deleteShopItem(id: string) {
    return this.prismaService.shopItem.delete({ where: { id } });
  }
}
