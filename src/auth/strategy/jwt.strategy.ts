import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '@prisma/prisma.service';
import { JwtPayload } from '@auth/auth.types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    if (payload.google_id) {
      const userWithGoogle = this.prismaService.user.findUnique({
        where: {
          google_id: payload.google_id,
        },
      });

      if (userWithGoogle) {
        return userWithGoogle;
      }
    }

    if (payload.spotify_id) {
      const userWithSpotify = this.prismaService.user.findUnique({
        where: {
          spotify_id: payload.spotify_id,
        },
      });

      if (userWithSpotify) {
        return userWithSpotify;
      }
    }

    if (payload.email) {
      const userWithEmail = this.prismaService.user.findUnique({
        where: {
          email: payload.email,
        },
      });

      if (userWithEmail) {
        return userWithEmail;
      }
    }

    return null;
  }
}
