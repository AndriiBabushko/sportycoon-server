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

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @Header('content-type', 'application/json')
  signUp(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.create(createUserDTO);
  }

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  signIn(@Request() req: any) {
    return { user: req.user, message: 'Logged in!' };
  }

  @Get('/auth-check')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedGuard)
  check(@Request() req: any) {
    return req.user;
  }

  @Get('/logout')
  @UseGuards(AuthenticatedGuard)
  logout(@Request() req: any) {
    req.session.destroy();
    return { message: 'Logged out!' };
  }
}
