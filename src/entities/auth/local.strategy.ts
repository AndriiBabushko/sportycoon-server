import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from '@entities/auth/dto/sign-in.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    const signInDTO = new SignInDTO();
    signInDTO.email = email;
    signInDTO.password = password;

    const user = await this.authService.validateUser(signInDTO);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
