import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from '@nestjs/class-validator';

@InputType()
export class UpdateModifierInput {
  @Field({ nullable: true })
  @IsNotEmpty({ message: 'Name is required' })
  name?: string;
}
