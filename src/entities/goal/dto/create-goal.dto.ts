import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from '@nestjs/class-validator';
import { GoalNameType } from '@src/types/other';

export class CreateGoalDTO {
  @ApiProperty({ example: 'Build muscle' as GoalNameType })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: 'This goal is about to build muscle using any methods.',
  })
  @IsNotEmpty()
  readonly description: string;
}
