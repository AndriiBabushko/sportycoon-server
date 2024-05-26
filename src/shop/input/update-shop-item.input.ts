import { Field, Float, InputType } from '@nestjs/graphql';
import { IsArray, IsOptional } from '@nestjs/class-validator';

@InputType()
export class UpdateShopItemInput {
  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  price?: number;

  @Field({ nullable: true })
  @IsOptional()
  preview?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  images?: string[];

  @Field(() => Float, { nullable: true })
  @IsOptional()
  bundle_discount?: number;

  @Field({ nullable: true })
  @IsOptional()
  category_id?: string;

  @Field({ nullable: true })
  @IsOptional()
  user_id?: string;
}
