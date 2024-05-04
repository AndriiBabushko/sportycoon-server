import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Avatar {
  @Field()
  id: string;

  @Field()
  public_id: string;

  @Field()
  url: string;

  @Field()
  user_id: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  full_name: string;

  @Field(() => Avatar, { nullable: true })
  avatar?: Avatar | null;

  @Field()
  role: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
