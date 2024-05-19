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
@Directive('@key(fields: "id")')
export class User {
  @Field()
  id: string;

  @Field(() => String, { nullable: true })
  username?: string | null;

  @Field()
  email?: string | null;

  @Field(() => Avatar, { nullable: true })
  avatar?: Avatar | null;

  @Field()
  role: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field()
  google_id?: string | null;

  @Field()
  spotify_id?: string | null;
}
