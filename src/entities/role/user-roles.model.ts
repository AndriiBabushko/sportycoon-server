import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { UserModel } from '@entities/user/user.model';
import { DataTypes } from 'sequelize';
import { RoleModel } from '@entities/role/role.model';

@Table({ createdAt: false, updatedAt: false })
export class UserRolesModel extends Model<UserRolesModel> {
  @ForeignKey(() => UserModel)
  @Column({ type: DataTypes.INTEGER })
  userID: number;

  @ForeignKey(() => RoleModel)
  @Column({ type: DataTypes.INTEGER })
  roleID: number;
}
