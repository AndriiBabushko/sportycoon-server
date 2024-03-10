import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class UpdateCommentDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
