import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '@entities/user/user.service';
import * as bcrypt from 'bcrypt';
import { SignInDTO } from '@entities/auth/dto/sign-in.dto';
import { SignUpDTO } from '@entities/auth/dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(signUpDTO: SignUpDTO) {
    const candidate = await this.userService.findOne({
      email: signUpDTO.email,
    });

    if (candidate) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(signUpDTO.password, 10);

    const user = await this.userService.create({
      ...signUpDTO,
      password: hashedPassword,
    });

    return {
      message: 'User created successfully!',
      status: HttpStatus.CREATED,
      user,
    };
  }

  async validateUser(signInDTO: SignInDTO) {
    const user = await this.userService.findOne({
      email: signInDTO.email,
    });

    if (!user) {
      throw new ConflictException('User does not exist or invalid email');
    }

    const isMatch = await bcrypt.compare(signInDTO.password, user.password);

    if (!isMatch) {
      throw new ConflictException('Incorrect password');
    }

    if (user && isMatch) {
      return user;
    }

    return null;
  }
}
