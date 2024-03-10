import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class CreateCommentDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
