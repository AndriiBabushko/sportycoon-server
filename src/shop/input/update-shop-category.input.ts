import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from '@nestjs/class-validator';

@InputType()
export class UpdateShopCategoryInput {
  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  parent_id?: string;
}
