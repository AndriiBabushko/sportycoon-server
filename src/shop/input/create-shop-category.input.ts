import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from '@nestjs/class-validator';

@InputType()
export class CreateShopCategoryInput {
  @Field()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @Field({ nullable: true })
  @IsOptional()
  parent_id?: string;
}
