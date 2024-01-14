import { ApiProperty } from '@nestjs/swagger';
import { User } from '@src/types/user';
import { UserExample } from '@user/types/examples';
import { ConflictResponse } from '@src/types/ConflictResponse';

export class SignUpUserRequest {
  @ApiProperty({ example: 'andriibabushko@gmail.com' })
  email: string;

  @ApiProperty({ example: '12345' })
  password: string;
}

export class SignUpUserResponse {
  @ApiProperty({
    example: UserExample,
  })
  user: User;

  @ApiProperty({ example: 'User created!' })
  message: string;
}

export class SignUpUserConflictResponse extends ConflictResponse {
  @ApiProperty({ example: 'Email already exists' })
  message: string;
}
