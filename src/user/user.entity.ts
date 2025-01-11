import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@auth/auth.entity';

@ObjectType()
export class UpdateUserResponse {
  @Field(() => String)
  message: string;

  @Field(() => Number)
  statusCode: number;

  @Field(() => User)
  user: User;
}

@ObjectType()
export class DeleteUserResponse {
  @Field(() => String)
  message: string;

  @Field(() => Number)
  statusCode: number;
}
