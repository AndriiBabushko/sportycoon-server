import { Injectable } from '@nestjs/common';
import { UsersModel } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UsersModel)
    private usersModel: typeof UsersModel,
  ) {}

  findOne(filter: {
    where: { id?: number; username?: string; email?: string };
  }): Promise<UsersModel> {
    return this.usersModel.findOne({ ...filter });
  }

  async create(
    createUserDTO: CreateUserDTO,
  ): Promise<UsersModel | { warningMessage: string }> {
    const user = new UsersModel();

    const existingUserByEmail = await this.findOne({
      where: { email: createUserDTO.email },
    });
    const existingUserByUsername = await this.findOne({
      where: { username: createUserDTO.username },
    });

    if (existingUserByEmail) {
      return { warningMessage: 'Email already exists' };
    }

    if (existingUserByUsername) {
      return { warningMessage: 'Username already exists' };
    }

    const hashedPassword = await bcrypt.hash(createUserDTO.password, 10);

    Object.keys(createUserDTO).forEach((key) => {
      user[key] = createUserDTO[key];
    });
    user.password = hashedPassword;

    return user.save();
  }
}
