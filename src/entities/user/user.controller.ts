import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user', 'sportycoon')
@Controller('api/user')
export class UserController {
  constructor(private readonly usersService: UserService) {}
}
