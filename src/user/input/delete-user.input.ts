import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from '@nestjs/class-validator';

@InputType()
export class DeleteUserInput {
  @Field()
  @IsNotEmpty({ message: 'ID is required' })
  @IsString({ message: 'ID must be a string' })
  id: string;
}
