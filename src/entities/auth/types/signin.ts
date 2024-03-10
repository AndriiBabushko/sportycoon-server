import { ApiProperty } from '@nestjs/swagger';
import { UnauthorizedResponse } from '@src/types/responses';
import { User } from '@src/types/user';
import { UserExample } from './examples';

export class SignInUserRequest {
  @ApiProperty({ example: 'andriibabushko@gmail.com' })
  email: string;

  @ApiProperty({ example: '12345' })
  password: string;
}

export class SignInUserResponse {
  @ApiProperty({
    example: UserExample,
  })
  user: User;

  @ApiProperty({ example: 'Logged in!' })
  message: string;
}

export class SignInUserUnauthorizedResponse extends UnauthorizedResponse {}
