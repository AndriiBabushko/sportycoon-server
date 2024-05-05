import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from '@nestjs/class-validator';

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

  // @Field()
  // @IsNotEmpty({ message: 'Full name is required' })
  // @IsString({ message: 'Full name must be a string' })
  // full_name: string;

  // @IsNotEmpty({ message: 'Gender is re' })
  // gender: GenderType;
  //
  // @IsNotEmpty({ message: 'Height is required' })
  // height: HeightType;
  //
  // @IsNotEmpty({ message: 'Weight is required' })
  // weight: WeightType;
  //
  // @IsNotEmpty({ message: 'Goal weight is required' })
  // goalWeight: GoalWeightType;
  //
  // @IsNotEmpty({ message: 'Fitness level is required' })
  // fitnessLevel: FitnessLevelType;
  //
  // @IsNotEmpty({ message: 'Goals are required' })
  // goals: GoalType[];
  //
  // @IsNotEmpty({ message: 'Performance is required' })
  // performance: PerformanceType;
}
