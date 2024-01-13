import { ConflictException, Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private usersModel: typeof UserModel,
  ) {}

  findOne(filter: {
    where: { id?: number; username?: string; email?: string };
  }): Promise<UserModel> {
    return this.usersModel.findOne({ ...filter });
  }

  async create(createUserDTO: CreateUserDTO) {
    const user = new UserModel();

    const existingUserByEmail = await this.findOne({
      where: { email: createUserDTO.email },
    });
    const existingUserByUsername = await this.findOne({
      where: { username: createUserDTO.username },
    });

    if (existingUserByEmail) {
      return new ConflictException('Email already exists');
    }

    if (existingUserByUsername) {
      return new ConflictException('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDTO.password, 10);

    Object.keys(createUserDTO).forEach((key) => {
      user[key] = createUserDTO[key];
    });
    user.password = hashedPassword;

    return user.save();
  }
}
