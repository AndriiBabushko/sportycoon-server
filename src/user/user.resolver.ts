import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '@user/user.service';
import { RegisterResponse } from '@user/types/user.types';
import { RegisterUserDTO } from '@user/dto/user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserResponse], { name: 'users' })
  async users(): Promise<UserResponse[]> {
    return await this.userService.findAll();
  }
}
