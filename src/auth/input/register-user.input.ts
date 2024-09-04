import { Field, Float, InputType } from '@nestjs/graphql';
import {
  ArrayUnique,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  MinLength,
} from '@nestjs/class-validator';
import {
  FITNESS_LEVEL,
  GENDER,
  GOAL,
  HEIGHT_UNIT,
  WEIGHT_UNIT,
} from '@auth/auth.types';
import { GenderScalar } from '@scalars/gender.scalar';
import { FitnessLevelScalar } from '@scalars/fitness-level.scalar';
import { WeightUnitScalar } from '@scalars/weight-unit.scalar';
import { HeightUnitScalar } from '@scalars/height-unit.scalar';

@InputType()
export class HeightInput {
  @Field(() => Float)
  @IsNotEmpty({ message: 'Height value is required' })
  value: number;

  @Field(() => HeightUnitScalar)
  @IsNotEmpty({ message: 'Height unit is required' })
  unit: HEIGHT_UNIT;
}

@InputType()
export class WeightInput {
  @Field(() => Float)
  @IsNotEmpty({ message: 'Weight value is required' })
  value: number;

  @Field(() => WeightUnitScalar)
  @IsNotEmpty({ message: 'Weight unit is required' })
  unit: WEIGHT_UNIT;
}

@InputType()
export class GoalWeightInput {
  @Field(() => Float)
  @IsNotEmpty({ message: 'Goal weight value is required' })
  value: number;

  @Field(() => WeightUnitScalar)
  @IsNotEmpty({ message: 'Goal weight unit is required' })
  unit: WEIGHT_UNIT;
}

@InputType()
export class PerformanceInput {
  @Field()
  @IsInt()
  @Min(0, { message: 'Max pull-ups cannot be negative' })
  @IsNotEmpty({ message: 'Max pull-ups is required' })
  max_pull_ups: number;

  @Field()
  @IsInt()
  @Min(0, { message: 'Max push-ups cannot be negative' })
  @IsNotEmpty({ message: 'Max push-ups is required' })
  max_push_ups: number;

  @Field()
  @IsInt()
  @Min(0, { message: 'Max squats cannot be negative' })
  @IsNotEmpty({ message: 'Max squats is required' })
  max_squats: number;

  @Field()
  @IsInt()
  @Min(0, { message: 'Max dips cannot be negative' })
  @IsNotEmpty({ message: 'Max dips is required' })
  max_dips: number;
}

@InputType()
export class RegisterUserInput {
  @Field()
  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'Username must be a string' })
  username: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Full name is required' })
  @IsString({ message: 'Full name must be a string' })
  full_name: string;

  @Field(() => GenderScalar)
  @IsNotEmpty({ message: 'Gender is required' })
  gender: GENDER;

  @Field(() => HeightInput)
  @IsNotEmpty({ message: 'Height is required' })
  height: HeightInput;

  @Field(() => WeightInput)
  @IsNotEmpty({ message: 'Weight is required' })
  weight: WeightInput;

  @Field(() => GoalWeightInput)
  @IsNotEmpty({ message: 'Goal weight is required' })
  goal_weight: GoalWeightInput;

  @Field(() => FitnessLevelScalar)
  @IsNotEmpty({ message: 'Fitness level is required' })
  fitness_level: FITNESS_LEVEL;

  @Field(() => [GOAL])
  @IsNotEmpty({ message: 'Goals are required' })
  @ArrayUnique({ message: 'Goals must be unique' })
  @IsEnum(GOAL, { each: true, message: 'Invalid goal type' })
  goals: GOAL[];

  @Field(() => PerformanceInput)
  @IsNotEmpty({ message: 'Performance is required' })
  performance: PerformanceInput;
}
