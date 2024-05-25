import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserService } from '@user/user.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserInput } from '@auth/input/register-user.input';
import { LoginUserInput } from '@auth/input/login-user.input';
import { RefreshTokenResponse, User } from '@auth/auth.entity';
import { JwtPayload } from '@auth/auth.types';

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

  async generateTokens(user: User) {
    const payload: JwtPayload = {
      username: user.username,
      email: user.email,
      google_id: user.google_id,
      spotify_id: user.spotify_id,
    };

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

  async refreshToken(refreshToken: string): Promise<RefreshTokenResponse> {
    const decoded: JwtPayload = this.jwtService.verify(refreshToken, {
      secret: process.env.JWT_REFRESH_SECRET,
    });

    const userWithEmail = await this.prismaService.user.findUnique({
      where: {
        email: decoded.email,
      },
    });

    const userWithGoogle = await this.prismaService.user.findUnique({
      where: {
        google_id: decoded.google_id || '',
      },
    });

    const userWithSpotify = await this.prismaService.user.findUnique({
      where: {
        spotify_id: decoded.spotify_id || '',
      },
    });

    if (!userWithEmail && !userWithGoogle && !userWithSpotify) {
      throw new UnauthorizedException('User not found');
    }

    const { password: _password, ...user } =
      userWithEmail || userWithGoogle || userWithSpotify;

    const newTokens = await this.generateTokens(user);

    return {
      ...newTokens,
      user,
    };
  }
}
