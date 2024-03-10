import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RoleType } from '@src/types/other';

export class CreateRoleDTO {
  @ApiProperty({ example: 'user' as RoleType })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 'Just a user, basic access.' })
  @IsNotEmpty()
  readonly description: string;
}
