import { ConflictException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback, Profile } from 'passport-spotify';
import { PrismaService } from '../../prisma.service';
import { AuthService } from '@auth/auth.service';

@Injectable()
export class SpotifyStrategy extends PassportStrategy(Strategy, 'spotify') {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_REDIRECT_URL,
      scope:
        'user-read-private user-read-email playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public',
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    const email = profile.emails[0].value;

    let user = await this.prismaService.user.findUnique({
      where: {
        spotify_id: profile.id,
      },
    });

    if (!user) {
      const userWithSpotifyEmail = await this.prismaService.user.findUnique({
        where: {
          email,
        },
      });

      try {
        user = await this.prismaService.user.create({
          data: {
            email: !userWithSpotifyEmail ? email : null,
            spotify_id: profile.id,
          },
        });
      } catch (e) {
        throw new ConflictException('User registration failed');
      }
    }

    const tokens = await this.authService.generateTokens(user);

    done(null, { user, ...tokens });
  }
}
