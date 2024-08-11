import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { GoogleAuthGuard } from '@auth/guard/google-auth.guard';
import { SpotifyAuthGuard } from '@auth/guard/spotify-auth.guard';

@Controller()
export class AuthController {
  constructor() {}

  @UseGuards(GoogleAuthGuard)
  @Get('/auth/google')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async googleAuth(@Req() req: Request) {}

  @UseGuards(GoogleAuthGuard)
  @Get('/auth/google/callback')
  async googleAuthRedirect(@Req() req: Request) {
    return {
      statusCode: 200,
      data: req.user,
    };
  }

  @UseGuards(SpotifyAuthGuard)
  @Get('/auth/spotify')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async spotifyAuth(@Req() req: Request) {}

  @UseGuards(SpotifyAuthGuard)
  @Get('/auth/spotify/callback')
  async spotifyAuthRedirect(@Req() req: Request) {
    return {
      statusCode: 200,
      data: req.user,
    };
  }
}
