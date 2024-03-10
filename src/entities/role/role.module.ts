import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleModel } from '@entities/role/role.model';
import { UserModel } from '@entities/user/user.model';
import { UserRolesModel } from '@entities/role/user-roles.model';

@Module({
  imports: [SequelizeModule.forFeature([RoleModel, UserModel, UserRolesModel])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
