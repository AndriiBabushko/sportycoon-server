import { ApiProperty } from '@nestjs/swagger';
import { ForbiddenResponse } from '@src/types/responses';
import { User } from '@src/types/user';
import { UserExample } from './examples';

export class AuthCheckResponse {
  @ApiProperty({
    example: UserExample,
  })
  user: User;
}

export class AuthCheckForbiddenResponse extends ForbiddenResponse {}
