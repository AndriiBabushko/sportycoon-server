import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@auth/guard/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserService } from '@user/user.service';
import { UpdateUserResponse, DeleteUserResponse } from '@user/user.entity';
import { UpdateUserInput } from '@user/input/update-user.input';
import { DeleteUserInput } from '@user/input/delete-user.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => UpdateUserResponse, { name: 'updateUserProfile' })
  async login(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.userService.updateUser(updateUserInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => DeleteUserResponse, { name: 'deleteUserProfile' })
  async register(@Args('deleteUserInput') deleteUserInput: DeleteUserInput) {
    return await this.userService.deleteUser(deleteUserInput);
  }
}
