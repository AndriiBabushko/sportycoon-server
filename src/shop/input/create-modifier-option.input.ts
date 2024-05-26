import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from '@nestjs/class-validator';

@InputType()
export class CreateModifierOptionInput {
  @Field()
  @IsNotEmpty({ message: 'Value is required' })
  value: string;

  @Field()
  @IsNotEmpty({ message: 'Modifier ID is required' })
  modifier_id: string;
}
