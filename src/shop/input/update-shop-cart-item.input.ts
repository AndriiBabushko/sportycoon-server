import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from '@nestjs/class-validator';

@InputType()
export class UpdateShopCartItemInput {
  @Field(() => Int, { nullable: true })
  @IsInt()
  quantity?: number;

  @Field({ nullable: true })
  @IsNotEmpty({ message: 'Shop Cart ID is required' })
  shop_cart_id?: string;

  @Field({ nullable: true })
  @IsNotEmpty({ message: 'Shop Item ID is required' })
  shop_item_id?: string;
}
