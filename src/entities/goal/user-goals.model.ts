import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { UserModel } from '@entities/user/user.model';
import { GoalModel } from '@entities/goal/goal.model';

@Table({ createdAt: false, updatedAt: false })
export class UserGoalsModel extends Model<UserGoalsModel> {
  @ForeignKey(() => UserModel)
  @Column({ type: DataTypes.INTEGER })
  userID: number;

  @ForeignKey(() => GoalModel)
  @Column({ type: DataTypes.INTEGER })
  goalID: number;
}
