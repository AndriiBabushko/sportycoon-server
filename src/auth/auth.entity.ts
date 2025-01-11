import { Directive, Field, Float, ObjectType } from '@nestjs/graphql';
import {
  FITNESS_LEVEL,
  FitnessLevelType,
  GENDER,
  GenderType,
  GOAL,
  GoalType,
  HEIGHT_UNIT,
  HeightUnitType,
  RoleType,
  WEIGHT_UNIT,
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
  @Field(() => String)
  id: string;

  @Field(() => Number)
  max_pull_ups: number;

  @Field(() => Number)
  max_push_ups: number;

  @Field(() => Number)
  max_squats: number;

  @Field(() => Number)
  max_dips: number;

  @Field(() => String)
  user_id: string;
}

@ObjectType()
export class Height {
  @Field(() => Float)
  value: number;

  @Field(() => HEIGHT_UNIT)
  unit: HeightUnitType;
}

@ObjectType()
export class Weight {
  @Field(() => Float)
  value: number;

  @Field(() => WEIGHT_UNIT)
  unit: WeightUnitType;
}

@ObjectType()
export class GoalWeight {
  @Field(() => Float)
  value: number;

  @Field(() => WEIGHT_UNIT)
  unit: WeightUnitType;
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
  full_name?: string | null;

  @Field(() => GENDER, { nullable: true })
  gender?: GenderType | null;

  @Field(() => Height, { nullable: true })
  height?: Height | null;

  @Field(() => Weight, { nullable: true })
  weight?: Weight | null;

  @Field(() => GoalWeight, { nullable: true })
  goal_weight?: GoalWeight | null;

  @Field(() => FITNESS_LEVEL, { nullable: true })
  fitness_level?: FitnessLevelType | null;

  @Field(() => [GOAL], { nullable: 'itemsAndList' })
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

@ObjectType()
export class RefreshTokenResponse {
  @Field()
  access_token: string;

  @Field()
  refresh_token: string;

  @Field(() => User)
  user: User;
}
