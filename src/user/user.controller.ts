import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LocalAuthGuard } from '@auth/local.auth.guard';
import { AuthenticatedGuard } from '@auth/authenticated.guard';
import {
  ApiBody,
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  SignInUserRequest,
  SignInUserResponse,
  SignInUserUnauthorizedResponse,
  LogoutUserResponse,
  AuthCheckForbiddenResponse,
  AuthCheckResponse,
  LogoutUserForbiddenResponse,
  SignUpUserRequest,
  SignUpUserResponse,
  SignUpUserConflictResponse,
} from '@user/types';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @ApiBody({ type: SignUpUserRequest })
  @ApiOkResponse({ type: SignUpUserResponse })
  @ApiConflictResponse({ type: SignUpUserConflictResponse })
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @Header('content-type', 'application/json')
  async signUp(@Body() createUserDTO: CreateUserDTO) {
    const user = await this.usersService.create(createUserDTO);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return {
      user,
      message: 'User created!',
    };
  }

  @ApiBody({ type: SignInUserRequest })
  @ApiOkResponse({ type: SignInUserResponse })
  @ApiUnauthorizedResponse({ type: SignInUserUnauthorizedResponse })
  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  signIn(@Request() req: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = req.user.dataValues;
    return { user, message: 'Logged in!' };
  }

  @ApiOkResponse({ type: AuthCheckResponse })
  @ApiForbiddenResponse({ type: AuthCheckForbiddenResponse })
  @Get('/auth-check')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedGuard)
  check(@Request() req: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = req.user.dataValues;
    return user;
  }

  @ApiOkResponse({ type: LogoutUserResponse })
  @ApiForbiddenResponse({ type: LogoutUserForbiddenResponse })
  @Get('/logout')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedGuard)
  logout(@Request() req: any) {
    req.session.destroy();
    return { message: 'Logged out!' };
  }
}
