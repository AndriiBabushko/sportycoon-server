import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from '@nestjs/class-validator';

@InputType()
export class CreateModifierInput {
  @Field()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
}
