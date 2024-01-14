import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: 'AndriiBabushko' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'andriibabushko@gmail.com' })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: '12345' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'Andrii Babushko' })
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
