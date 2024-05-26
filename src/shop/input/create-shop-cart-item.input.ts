import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from '@nestjs/class-validator';

@InputType()
export class CreateShopCartItemInput {
  @Field(() => Int)
  @IsInt()
  quantity: number;

  @Field()
  @IsNotEmpty({ message: 'Shop Cart ID is required' })
  shop_cart_id: string;

  @Field()
  @IsNotEmpty({ message: 'Shop Item ID is required' })
  shop_item_id: string;
}
