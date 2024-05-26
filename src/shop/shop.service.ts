import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import {
  CreateShopItemInput,
  UpdateShopItemInput,
  CreateShopCategoryInput,
  UpdateShopCategoryInput,
  CreateShopCartInput,
  UpdateShopCartInput,
  CreateModifierInput,
  UpdateModifierInput,
  CreateModifierOptionInput,
  UpdateModifierOptionInput,
  CreateShopCartItemInput,
  UpdateShopCartItemInput,
} from './input';

@Injectable()
export class ShopService {
  constructor(private readonly prismaService: PrismaService) {}

  // Shop Item Methods
  async getShopItems() {
    return this.prismaService.shopItem.findMany();
  }

  async getShopItemById(id: string) {
    return this.prismaService.shopItem.findUnique({ where: { id } });
  }

  async createShopItem(data: CreateShopItemInput) {
    return this.prismaService.shopItem.create({ data });
  }

  async updateShopItem(id: string, data: UpdateShopItemInput) {
    return this.prismaService.shopItem.update({ where: { id }, data });
  }

  async deleteShopItem(id: string) {
    return this.prismaService.shopItem.delete({ where: { id } });
  }

  // Shop Category Methods
  async getShopCategories() {
    return this.prismaService.shopCategory.findMany();
  }

  async getShopCategoryById(id: string) {
    return this.prismaService.shopCategory.findUnique({ where: { id } });
  }

  async createShopCategory(data: CreateShopCategoryInput) {
    return this.prismaService.shopCategory.create({ data });
  }

  async updateShopCategory(id: string, data: UpdateShopCategoryInput) {
    return this.prismaService.shopCategory.update({ where: { id }, data });
  }

  async deleteShopCategory(id: string) {
    return this.prismaService.shopCategory.delete({ where: { id } });
  }

  // Shop Cart Methods
  async getShopCarts() {
    return this.prismaService.shopCart.findMany();
  }

  async getShopCartById(id: string) {
    return this.prismaService.shopCart.findUnique({ where: { id } });
  }

  async createShopCart(data: CreateShopCartInput) {
    return this.prismaService.shopCart.create({ data });
  }

  async updateShopCart(id: string, data: UpdateShopCartInput) {
    return this.prismaService.shopCart.update({ where: { id }, data });
  }

  async deleteShopCart(id: string) {
    return this.prismaService.shopCart.delete({ where: { id } });
  }

  // Shop Cart Item Methods

  async getShopCartItems() {
    return this.prismaService.shopCartItem.findMany();
  }

  async getShopCartItemById(id: string) {
    return this.prismaService.shopCartItem.findUnique({ where: { id } });
  }

  async createShopCartItem(data: CreateShopCartItemInput) {
    return this.prismaService.shopCartItem.create({ data });
  }

  async updateShopCartItem(id: string, data: UpdateShopCartItemInput) {
    return this.prismaService.shopCartItem.update({ where: { id }, data });
  }

  async deleteShopCartItem(id: string) {
    return this.prismaService.shopCartItem.delete({ where: { id } });
  }

  // Modifier Option Methods

  async getModifierOptions() {
    return this.prismaService.modifierOption.findMany();
  }

  async getModifierOptionById(id: string) {
    return this.prismaService.modifierOption.findUnique({ where: { id } });
  }

  async createModifierOption(data: CreateModifierOptionInput) {
    return this.prismaService.modifierOption.create({ data });
  }

  async updateModifierOption(id: string, data: UpdateModifierOptionInput) {
    return this.prismaService.modifierOption.update({ where: { id }, data });
  }

  async deleteModifierOption(id: string) {
    return this.prismaService.modifierOption.delete({ where: { id } });
  }

  // Modifier Methods

  async getModifiers() {
    return this.prismaService.modifier.findMany();
  }

  async getModifierById(id: string) {
    return this.prismaService.modifier.findUnique({ where: { id } });
  }

  async createModifier(data: CreateModifierInput) {
    return this.prismaService.modifier.create({ data });
  }

  async updateModifier(id: string, data: UpdateModifierInput) {
    return this.prismaService.modifier.update({ where: { id }, data });
  }

  async deleteModifier(id: string) {
    return this.prismaService.modifier.delete({ where: { id } });
  }
}
