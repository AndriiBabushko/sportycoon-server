import { IsNotEmpty, IsEmail, IsString } from '@nestjs/class-validator';

export class SignInDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
