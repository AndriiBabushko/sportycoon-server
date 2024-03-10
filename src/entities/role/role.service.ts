import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RoleModel } from '@entities/role/role.model';
import { CreateRoleDTO } from '@entities/role/dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectModel(RoleModel) private roleModel: typeof RoleModel) {}

  async createRole(createRoleDTO: CreateRoleDTO) {
    const role = await this.roleModel.create(createRoleDTO);
    return {
      role,
      message: 'Role created successfully!',
      status: HttpStatus.CREATED,
    };
  }

  async getRoleByName(name: string) {
    const role = await this.roleModel.findOne({ where: { name } });
    return {
      role,
      message: 'Role retrieved successfully!',
      status: HttpStatus.OK,
    };
  }
}
