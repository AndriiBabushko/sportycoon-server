import { Directive, Field, Float, ObjectType } from '@nestjs/graphql';
import {
  FitnessLevelType,
  GenderType,
  GoalType,
  HeightUnitType,
  RoleType,
  WeightUnitType,
} from '@auth/auth.types';

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
export class Performance {
  @Field()
  id: string;

  @Field()
  public_id: string;

  @Field()
  maxPullUps: number;

  @Field()
  maxPushUps: number;

  @Field()
  maxSquats: number;

  @Field()
  maxDips: number;

  @Field()
  user_id: string;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field()
  id: string;

  @Field(() => String, { nullable: true })
  username?: string | null;

  @Field(() => String, { nullable: true })
  email?: string | null;

  @Field(() => String, { nullable: true })
  gender?: GenderType | null;

  @Field(() => Float, { nullable: true })
  height_value?: number | null;

  @Field(() => String, { nullable: true })
  height_unit?: HeightUnitType | null;

  @Field(() => Float, { nullable: true })
  weight_value?: number | null;

  @Field(() => String, { nullable: true })
  weight_unit?: WeightUnitType | null;

  @Field(() => Float, { nullable: true })
  goal_weight_value?: number | null;

  @Field(() => String, { nullable: true })
  goal_weight_unit?: WeightUnitType | null;

  @Field(() => String, { nullable: true })
  fitness_level?: FitnessLevelType | null;

  @Field(() => [String], { nullable: 'itemsAndList' })
  goals?: GoalType[] | null;

  @Field(() => Performance, { nullable: true })
  performance?: Performance | null;

  @Field(() => Avatar, { nullable: true })
  avatar?: Avatar | null;

  @Field()
  role: RoleType;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => String, { nullable: true })
  google_id?: string | null;

  @Field(() => String, { nullable: true })
  spotify_id?: string | null;
}

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field()
  refresh_token: string;

  @Field(() => User)
  user: User;
}

@ObjectType()
export class RegisterResponse {
  @Field()
  access_token: string;

  @Field()
  refresh_token: string;

  @Field(() => User)
  user: User;
}
