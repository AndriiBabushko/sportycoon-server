import { Field, Float, InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsOptional } from '@nestjs/class-validator';

@InputType()
export class CreateShopItemInput {
  @Field()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @Field(() => Float)
  @IsNotEmpty({ message: 'Price is required' })
  price: number;

  @Field()
  @IsNotEmpty({ message: 'Preview is required' })
  preview: string;

  @Field(() => [String])
  @IsArray()
  images: string[];

  @Field(() => Float, { nullable: true })
  @IsOptional()
  bundle_discount?: number;

  @Field()
  @IsNotEmpty({ message: 'Category ID is required' })
  category_id: string;

  @Field({ nullable: true })
  @IsOptional()
  user_id?: string;
}
