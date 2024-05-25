import { ConflictException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback, Profile } from 'passport-google-oauth20';
import { PrismaService } from '../../prisma.service';
import { AuthService } from '@auth/auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    const { emails, username } = profile;
    const email = emails[0].value;

    let user = await this.prismaService.user.findUnique({
      where: {
        google_id: profile.id,
      },
    });

    if (!user) {
      const userWithGoogleEmail = await this.prismaService.user.findUnique({
        where: {
          email,
        },
      });

      try {
        user = await this.prismaService.user.create({
          data: {
            email: !userWithGoogleEmail ? email : null,
            username,
            google_id: profile.id,
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
