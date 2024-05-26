import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { ShopCart } from './shop-cart.entity';
import { ShopItem } from './shop-item.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class ShopCartItem {
  @Field()
  id: string;

  @Field(() => Int)
  quantity: number;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => ShopCart)
  shop_cart: ShopCart;

  @Field()
  shop_cart_id: string;

  @Field(() => ShopItem)
  shop_item: ShopItem;

  @Field()
  shop_item_id: string;
}
