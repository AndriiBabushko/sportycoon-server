import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from '@nestjs/class-validator';

@InputType()
export class CreateShopCartInput {
  @Field()
  @IsNotEmpty({ message: 'User ID is required' })
  user_id: string;
}
