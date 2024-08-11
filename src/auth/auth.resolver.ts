import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from '@auth/auth.service';
import { RegisterUserInput } from '@auth/input/register-user.input';
import { LoginUserInput } from '@auth/input/login-user.input';
import {
  LoginResponse,
  RefreshTokenResponse,
  RegisterResponse,
  User,
} from '@auth/auth.entity';
import { GqlAuthGuard } from '@auth/guard/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { AuthUserDecorator } from '@auth/decorator/auth-user.decorator';
import { RefreshTokenInput } from '@auth/input/refresh-token.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => LoginResponse, { name: 'login' })
  async login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return await this.authService.login(loginUserInput);
  }

  @Mutation(() => RegisterResponse, { name: 'register' })
  async register(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ) {
    return await this.authService.register(registerUserInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'me' })
  async getCurrentAuthUser(@AuthUserDecorator() user: User) {
    return user;
  }

  @Mutation(() => RefreshTokenResponse, { name: 'refreshToken' })
  async refreshToken(
    @Args('refreshTokenInput') refreshTokenInput: RefreshTokenInput,
  ) {
    return await this.authService.refreshToken(refreshTokenInput.refresh_token);
  }
}
