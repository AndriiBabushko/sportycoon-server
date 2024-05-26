import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShopService } from './shop.service';
import {
  CreateModifierInput,
  CreateModifierOptionInput,
  CreateShopCartInput,
  CreateShopCartItemInput,
  CreateShopCategoryInput,
  CreateShopItemInput,
  UpdateModifierInput,
  UpdateModifierOptionInput,
  UpdateShopCartInput,
  UpdateShopCartItemInput,
  UpdateShopCategoryInput,
  UpdateShopItemInput,
} from './input';
import {
  Modifier,
  ModifierOption,
  ShopCart,
  ShopCartItem,
  ShopCategory,
  ShopItem,
  ShopItemModifier,
} from './entities';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '@auth/guard/gql-auth.guard';

@Resolver()
export class ShopResolver {
  constructor(private readonly shopService: ShopService) {}

  // Shop Item Resolvers
  @Query(() => [ShopItem])
  async getShopItems() {
    return this.shopService.getShopItems();
  }

  @Query(() => ShopItem)
  async getShopItemById(@Args('id') id: string) {
    return this.shopService.getShopItemById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopItem)
  async createShopItem(@Args('data') data: CreateShopItemInput) {
    return this.shopService.createShopItem(data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopItem)
  async updateShopItem(
    @Args('id') id: string,
    @Args('data') data: UpdateShopItemInput,
  ) {
    return this.shopService.updateShopItem(id, data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopItem)
  async deleteShopItem(@Args('id') id: string) {
    return this.shopService.deleteShopItem(id);
  }

  // Shop Category Resolvers
  @Query(() => [ShopCategory])
  async getShopCategories() {
    return this.shopService.getShopCategories();
  }

  @Query(() => ShopCategory)
  async getShopCategoryById(@Args('id') id: string) {
    return this.shopService.getShopCategoryById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopCategory)
  async createShopCategory(@Args('data') data: CreateShopCategoryInput) {
    return this.shopService.createShopCategory(data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopCategory)
  async updateShopCategory(
    @Args('id') id: string,
    @Args('data') data: UpdateShopCategoryInput,
  ) {
    return this.shopService.updateShopCategory(id, data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopCategory)
  async deleteShopCategory(@Args('id') id: string) {
    return this.shopService.deleteShopCategory(id);
  }

  // Shop Cart Resolvers

  @Query(() => [ShopCart])
  async getShopCarts() {
    return this.shopService.getShopCarts();
  }

  @Query(() => ShopCart)
  async getShopCartById(@Args('id') id: string) {
    return this.shopService.getShopCartById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopCart)
  async createShopCart(@Args('data') data: CreateShopCartInput) {
    return this.shopService.createShopCart(data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopCart)
  async updateShopCart(
    @Args('id') id: string,
    @Args('data') data: UpdateShopCartInput,
  ) {
    return this.shopService.updateShopCart(id, data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopCart)
  async deleteShopCart(@Args('id') id: string) {
    return this.shopService.deleteShopCart(id);
  }

  // Shop Cart Item Resolvers

  @Query(() => [ShopCartItem])
  async getShopCartItems() {
    return this.shopService.getShopCartItems();
  }

  @Query(() => ShopCartItem)
  async getShopCartItemById(@Args('id') id: string) {
    return this.shopService.getShopCartItemById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopCartItem)
  async createShopCartItem(@Args('data') data: CreateShopCartItemInput) {
    return this.shopService.createShopCartItem(data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopCartItem)
  async updateShopCartItem(
    @Args('id') id: string,
    @Args('data') data: UpdateShopCartItemInput,
  ) {
    return this.shopService.updateShopCartItem(id, data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ShopCartItem)
  async deleteShopCartItem(@Args('id') id: string) {
    return this.shopService.deleteShopCartItem(id);
  }

  // Modifier Option Resolvers
  @Query(() => [ModifierOption])
  async getModifierOptions() {
    return this.shopService.getModifierOptions();
  }

  @Query(() => ModifierOption)
  async getModifierOptionById(@Args('id') id: string) {
    return this.shopService.getModifierOptionById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ModifierOption)
  async createModifierOption(@Args('data') data: CreateModifierOptionInput) {
    return this.shopService.createModifierOption(data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ModifierOption)
  async updateModifierOption(
    @Args('id') id: string,
    @Args('data') data: UpdateModifierOptionInput,
  ) {
    return this.shopService.updateModifierOption(id, data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ModifierOption)
  async deleteModifierOption(@Args('id') id: string) {
    return this.shopService.deleteModifierOption(id);
  }

  // Modifier Resolvers
  @Query(() => [Modifier])
  async getModifiers() {
    return this.shopService.getModifiers();
  }

  @Query(() => Modifier)
  async getModifierById(@Args('id') id: string) {
    return this.shopService.getModifierById(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Modifier)
  async createModifier(@Args('data') data: CreateModifierInput) {
    return this.shopService.createModifier(data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Modifier)
  async updateModifier(
    @Args('id') id: string,
    @Args('data') data: UpdateModifierInput,
  ) {
    return this.shopService.updateModifier(id, data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Modifier)
  async deleteModifier(@Args('id') id: string) {
    return this.shopService.deleteModifier(id);
  }
}
