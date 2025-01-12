import { Field, InputType, Int } from '@nestjs/graphql';
import {
  ArrayUnique,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
} from '@nestjs/class-validator';
import { FITNESS_LEVEL, GENDER, GOAL } from '@auth/auth.types';
import { GenderScalar } from '@scalars/gender.scalar';
import {
  GoalWeightInput,
  HeightInput,
  WeightInput,
} from '@auth/input/register-user.input';
import { FitnessLevelScalar } from '@scalars/fitness-level.scalar';

@InputType()
export class UpdatePerformanceInput {
  @Field(() => Int, { nullable: true })
  @IsInt()
  @Min(0, { message: 'Max pull-ups cannot be negative' })
  max_pull_ups?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @Min(0, { message: 'Max push-ups cannot be negative' })
  max_push_ups?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @Min(0, { message: 'Max squats cannot be negative' })
  max_squats?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @Min(0, { message: 'Max dips cannot be negative' })
  max_dips?: number;
}

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty({ message: 'ID is required' })
  @IsString({ message: 'ID must be a string' })
  id: string;

  @Field(() => String, { nullable: true })
  @IsString({ message: 'Username must be a string' })
  username?: string;

  @Field(() => String, { nullable: true })
  @IsString({ message: 'Email must be a string' })
  email?: string;

  @Field(() => String, { nullable: true })
  @IsString({ message: 'Full name must be a string' })
  full_name?: string;

  @Field(() => GenderScalar, { nullable: true })
  gender?: GENDER;

  @Field(() => HeightInput, { nullable: true })
  height?: HeightInput;

  @Field(() => WeightInput, { nullable: true })
  weight?: WeightInput;

  @Field(() => GoalWeightInput, { nullable: true })
  goal_weight?: GoalWeightInput;

  @Field(() => FitnessLevelScalar, { nullable: true })
  fitness_level?: FITNESS_LEVEL;

  @Field(() => [GOAL], { nullable: true })
  @ArrayUnique({ message: 'Goals must be unique' })
  @IsEnum(GOAL, { each: true, message: 'Invalid goal type' })
  goals: GOAL[];

  @Field(() => UpdatePerformanceInput, { nullable: true })
  performance: UpdatePerformanceInput;
}
