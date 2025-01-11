import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayUnique,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from '@nestjs/class-validator';
import { FITNESS_LEVEL, GENDER, GOAL } from '@auth/auth.types';
import { GenderScalar } from '@scalars/gender.scalar';
import {
  GoalWeightInput,
  HeightInput,
  PerformanceInput,
  WeightInput,
} from '@auth/input/register-user.input';
import { FitnessLevelScalar } from '@scalars/fitness-level.scalar';

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

  @Field(() => String, { nullable: true })
  @IsString({ message: 'Password must be a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password?: string;

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

  @Field(() => PerformanceInput, { nullable: true })
  performance: PerformanceInput;
}
