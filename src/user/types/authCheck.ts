import { ApiProperty } from '@nestjs/swagger';
import { ForbiddenResponse } from '@src/types/ForbiddenResponse';
import { User } from '@src/types/user';
import { UserExample } from '@user/types/examples';

export class AuthCheckResponse {
  @ApiProperty({
    example: UserExample,
  })
  user: User;
}

export class AuthCheckForbiddenResponse extends ForbiddenResponse {}
