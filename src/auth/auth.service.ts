import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { UserService } from '@user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserInput } from '@auth/input/register-user.input';
import { LoginUserInput } from '@auth/input/login-user.input';
import { User } from '@auth/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(loginUserInput: LoginUserInput) {
    const { email, password } = loginUserInput;

    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!(await this.userService.comparePassword(password, user.password))) {
      throw new ForbiddenException('Invalid credentials');
    }

    const tokens = await this.generateTokens(user);

    return {
      ...tokens,
      user,
    };
  }

  async register(registerUserInput: RegisterUserInput) {
    const { email, password, username } = registerUserInput;

    const isEmailExist = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (isEmailExist) {
      throw new ConflictException('User already exists with this email');
    }

    const isUsernameExist = await this.prismaService.user.findFirst({
      where: {
        username,
      },
    });

    if (isUsernameExist) {
      throw new ConflictException('User already exists with this username');
    }

    const hashedPassword = await this.userService.hashPassword(password);

    await this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
      },
    });

    return this.login({ email, password });
  }

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

  async verify(accessToken: string) {
    const decoded = this.jwtService.verify(accessToken, {
      secret: process.env.JWT_SECRET,
    });

    const user = await this.prismaService.user.findUnique({
      where: {
        email: decoded.email,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async generateTokens(user: User) {
    const payload = { username: user.username, sub: user.email };

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1d',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '7d',
    });

    return { access_token: accessToken, refresh_token: refreshToken };
  }
}
