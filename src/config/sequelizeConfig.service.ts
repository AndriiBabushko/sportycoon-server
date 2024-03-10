import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { UserModel } from '@entities/user/user.model';
import { GoalModel } from '@entities/goal/goal.model';
import { RoleModel } from '@entities/role/role.model';
import { UserGoalsModel } from '@entities/goal/user-goals.model';
import { UserRolesModel } from '@entities/role/user-roles.model';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const {
      sql: { dialect, logging, host, port, username, password, database },
    } = this.configService.get('database');

    return {
      dialect,
      logging,
      host,
      port,
      username,
      password,
      database,
      models: [UserModel, RoleModel, UserRolesModel, GoalModel, UserGoalsModel],
      autoLoadModels: true,
      synchronize: true,
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    } as SequelizeModuleOptions;
  }
}
