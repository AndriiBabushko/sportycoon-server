import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';
import { RegisterUserInput } from '@auth/input/register-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async register(registerUserInput: RegisterUserInput) {
    const { email, username, password } = registerUserInput;

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
}
