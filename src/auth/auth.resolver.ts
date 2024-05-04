import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '@auth/auth.service';
import { LoginResponse } from '@auth/auth.types';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login() {
    return await this.authService.login();
  }
}
