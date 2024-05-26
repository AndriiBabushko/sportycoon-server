import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShopService } from './shop.service';
import { CreateShopItemInput } from './input/create-shop-item.input';
import { UpdateShopItemInput } from './input/update-shop-item.input';
import { ShopItem } from './entities';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '@auth/guards/gql-auth.guard';

@Resolver()
export class ShopResolver {
  constructor(private readonly shopService: ShopService) {}

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
}
