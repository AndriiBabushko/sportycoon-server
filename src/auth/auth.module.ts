import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '@user/user.module';
import { LocalStrategy } from '@auth/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'node:process';
import { JwtStrategy } from '@auth/strategies/jwt.strategy';
import { PrismaService } from '@prisma/prisma.service';
import { AuthResolver } from '@auth/auth.resolver';
import { GoogleStrategy } from '@auth/strategies/google.strategy';
import { AuthController } from '@auth/auth.controller';
import { SpotifyStrategy } from '@auth/strategies/spotify.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '1d',
      },
    }),
    UserModule,
  ],
  providers: [
    AuthResolver,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
    SpotifyStrategy,
    PrismaService,
  ],
})
export class AuthModule {}
