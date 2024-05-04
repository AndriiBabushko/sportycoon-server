import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { LoginUserDTO, RegisterUserDTO } from '@user/dto/user.dto';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  async register(registerDTO: RegisterUserDTO) {
    const { email, username, password, full_name } = registerDTO;

    const isEmailExist = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isEmailExist) {
      throw new ConflictException('User already exist with this email!');
    }

    const isUsernameExist = await this.prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (isUsernameExist) {
      throw new ConflictException('User already exist with this username!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
      },
    });

    return {
      code: HttpStatus.CREATED,
      user: newUser,
      message: 'User created successfully!',
    };
  }

  // async login(loginUserDTO: LoginUserDTO) {
  //   const { email, password } = loginUserDTO;
  //   return {
  //     access_token: '',
  //   };
  // }

  // async getAuthUser(user: UserModel) {}
}
