import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { GoalModel } from '@entities/goal/goal.model';
import { UserGoalsModel } from '@entities/goal/user-goals.model';
import { RoleModel } from '@entities/role/role.model';
import { UserRolesModel } from '@entities/role/user-roles.model';
import { RoleModule } from '@entities/role/role.module';
import { GoalModule } from '@entities/goal/goal.module';

@Module({
  imports: [
    SequelizeModule.forFeature([
      UserModel,
      GoalModel,
      UserGoalsModel,
      RoleModel,
      UserRolesModel,
    ]),
    RoleModule,
    GoalModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
