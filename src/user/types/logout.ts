import { ApiProperty } from '@nestjs/swagger';
import { ForbiddenResponse } from '@src/types/ForbiddenResponse';

export class LogoutUserResponse {
  @ApiProperty({ example: 'Logged out!' })
  message: string;
}

export class LogoutUserForbiddenResponse extends ForbiddenResponse {}
