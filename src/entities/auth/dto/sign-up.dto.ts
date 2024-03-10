import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  FitnessLevelType,
  GenderType,
  GoalNameType,
  GoalType,
  GoalWeightType,
  HeightType,
  PerformanceType,
  RoleType,
  WeightType,
} from '@src/types/other';

export class SignUpDTO {
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
  readonly fullName: string;

  @ApiProperty({ example: 'user' as RoleType, default: 'user' as RoleType })
  readonly role: RoleType;

  @ApiProperty({ example: 'Male' as GenderType })
  @IsNotEmpty()
  readonly gender: GenderType;

  @ApiProperty({
    example: {
      unit: 'cm',
      value: 192,
    } as HeightType,
  })
  @IsNotEmpty()
  readonly height: HeightType;

  @ApiProperty({ example: { unit: 'kg', value: 71 } as WeightType })
  @IsNotEmpty()
  readonly weight: WeightType;

  @ApiProperty({ example: { unit: 'kg', value: 80 } as GoalWeightType })
  @IsNotEmpty()
  readonly goalWeight: GoalWeightType;

  @ApiProperty({ example: 'Intermediate' as FitnessLevelType })
  @IsNotEmpty()
  readonly fitnessLevel: FitnessLevelType;

  @ApiProperty({
    example: [
      {
        name: 'Lose weight' as GoalNameType,
        description: 'Lose weight',
      },
    ] as GoalType[],
  })
  @IsNotEmpty()
  readonly goals: GoalType[];

  @ApiProperty({
    example: {
      maxPullUps: 10,
      maxPushUps: 40,
      maxDips: 15,
      maxSquats: 60,
    } as PerformanceType,
  })
  @IsNotEmpty()
  readonly performance: PerformanceType;
}
