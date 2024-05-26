import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from '@nestjs/class-validator';

@InputType()
export class UpdateModifierOptionInput {
  @Field({ nullable: true })
  @IsNotEmpty({ message: 'Value is required' })
  value?: string;

  @Field({ nullable: true })
  @IsNotEmpty({ message: 'Modifier ID is required' })
  modifier_id?: string;
}
