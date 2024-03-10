import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { RoleService } from '@entities/role/role.service';
import { SignUpDTO } from '@entities/auth/dto/sign-up.dto';
import { GoalModel } from '@entities/goal/goal.model';
import { RoleModel } from '@entities/role/role.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
    private roleService: RoleService,
  ) {}

  findOne(filter: {
    id?: number;
    username?: string;
    email?: string;
  }): Promise<UserModel> {
    return this.userModel.findOne({
      where: { ...filter },
      include: [
        {
          model: RoleModel,
          as: 'roles',
          through: { attributes: [] },
        },
        {
          model: GoalModel,
          as: 'goals',
          through: { attributes: [] },
        },
      ],
    });
  }

  async create(signUpDTO: SignUpDTO) {
    const { role } = await this.roleService.getRoleByName('user');
    const user = await this.userModel.create(signUpDTO);
    await user.$set('roles', [role.id]);
    user.roles = [role];

    return this.findOne({ id: user.id });
  }
}
