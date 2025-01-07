import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from '@nestjs/class-validator';

@InputType()
export class RefreshTokenInput {
  @Field()
  @IsNotEmpty({ message: 'Refresh token is required' })
  @IsString({ message: 'Refresh token must be a string' })
  refresh_token: string;
}
