import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@auth/auth.entity';

export type GenderType = 'Male' | 'Female';

export type HeightType = {
  value: number;
  unit: 'cm' | 'in';
};

export type WeightType = {
  value: number;
  unit: 'kg' | 'lbs';
};

export type GoalWeightType = {
  value: number;
  unit: 'kg' | 'lbs';
};

export type FitnessLevelType =
  | 'Newbie'
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced';

export type GoalType =
  | 'Build strength'
  | 'Lose weight'
  | 'Build muscle'
  | 'Improve health'
  | 'Learn techniques';

export type PerformanceType = {
  maxPullUps: number;
  maxPushUps: number;
  maxSquats: number;
  maxDips: number;
};

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
