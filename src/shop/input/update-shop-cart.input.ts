import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from '@nestjs/class-validator';

@InputType()
export class UpdateShopCartInput {
  @Field({ nullable: true })
  @IsNotEmpty({ message: 'User ID is required' })
  user_id?: string;
}
