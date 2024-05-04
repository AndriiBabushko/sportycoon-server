import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { UserService } from '@user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (
      user &&
      (await this.userService.comparePassword(password, user.password))
    ) {
      const { password: _password, ...result } = user;
      return result;
    }

    return null;
  }
}
