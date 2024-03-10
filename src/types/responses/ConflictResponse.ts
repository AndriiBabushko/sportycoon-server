import { ApiProperty } from '@nestjs/swagger';

export class ConflictResponse {
  @ApiProperty({ example: 'Conflict' })
  error: string;

  @ApiProperty({ example: 409 })
  statusCode: number;
}
