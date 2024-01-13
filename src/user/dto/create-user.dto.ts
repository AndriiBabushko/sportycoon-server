import { IsNotEmpty } from '@nestjs/class-validator';
// import {
//   GenderType,
//   HeightType,
//   WeightType,
//   GoalWeightType,
//   FitnessLevelType,
//   GoalType,
//   PerformanceType,
// } from '@src/types/user';

export class CreateUserDTO {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  fullName: string;

  // @IsNotEmpty()
  // gender: GenderType;
  //
  // @IsNotEmpty()
  // height: HeightType;
  //
  // @IsNotEmpty()
  // weight: WeightType;
  //
  // @IsNotEmpty()
  // goalWeight: GoalWeightType;
  //
  // @IsNotEmpty()
  // fitnessLevel: FitnessLevelType;
  //
  // @IsNotEmpty()
  // goals: GoalType[];
  //
  // @IsNotEmpty()
  // performance: PerformanceType;
}
