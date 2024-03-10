import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Request as Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '@entities/auth/auth.service';
import { SignUpDTO } from '@entities/auth/dto/sign-up.dto';
import {
  ApiBody,
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  AuthCheckForbiddenResponse,
  AuthCheckResponse,
  LogoutUserForbiddenResponse,
  LogoutUserResponse,
  SignInUserRequest,
  SignInUserResponse,
  SignInUserUnauthorizedResponse,
  SignUpUserConflictResponse,
  SignUpUserRequest,
  SignUpUserResponse,
} from '@entities/auth/types';
import { AuthenticatedGuard } from '@entities/auth/authenticated.guard';
import { Request } from 'express';
import { UserModel } from '@entities/user/user.model';
import { LocalAuthGuard } from '@entities/auth/local.auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: SignInUserRequest })
  @ApiOkResponse({ type: SignInUserResponse })
  @ApiUnauthorizedResponse({ type: SignInUserUnauthorizedResponse })
  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Req() req: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = req.user as UserModel;
    return { user, status: HttpStatus.OK };
  }
  @ApiBody({ type: SignUpUserRequest })
  @ApiOkResponse({ type: SignUpUserResponse })
  @ApiConflictResponse({ type: SignUpUserConflictResponse })
  @Header('content-type', 'application/json')
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  signUp(@Body() signUpDTO: SignUpDTO) {
    return this.authService.signUp(signUpDTO);
  }

  @ApiOkResponse({ type: AuthCheckResponse })
  @ApiForbiddenResponse({ type: AuthCheckForbiddenResponse })
  @Get('/auth-check')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedGuard)
  check(@Req() req: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = req.user as UserModel;
    return { user, status: HttpStatus.OK };
  }

  @ApiOkResponse({ type: LogoutUserResponse })
  @ApiForbiddenResponse({ type: LogoutUserForbiddenResponse })
  @Get('/logout')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedGuard)
  logout(@Req() req: Request) {
    req.session.destroy(() => null);
    return { message: 'Logged out!', status: HttpStatus.OK };
  }
}
