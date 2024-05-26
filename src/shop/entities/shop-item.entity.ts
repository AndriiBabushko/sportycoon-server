import { Directive, Field, Float, ObjectType } from '@nestjs/graphql';
import { User } from '@auth/auth.entity';
import { ShopCartItem } from './shop-cart-item.entity';
import { ShopItemModifier } from './shop-item-modifier.entity';
import { ShopCategory } from './shop-category.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class ShopItem {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;

  @Field()
  preview: string;

  @Field(() => [String])
  images: string[];

  @Field(() => Float, { nullable: true })
  bundle_discount?: number;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => [ShopCartItem])
  cart_items: ShopCartItem[];

  @Field(() => [ShopItemModifier])
  modifiers: ShopItemModifier[];

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => String, { nullable: true })
  user_id?: string;

  @Field(() => ShopCategory)
  category: ShopCategory;

  @Field()
  category_id: string;
}
