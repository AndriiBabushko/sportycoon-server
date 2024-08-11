import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { User } from '@auth/auth.entity';
import { ShopCartItem } from './shop-cart-item.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class ShopCart {
  @Field()
  id: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => [ShopCartItem])
  items: ShopCartItem[];

  @Field(() => User)
  user: User;

  @Field()
  user_id: string;
}
