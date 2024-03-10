import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserModel } from '@entities/user/user.model';
import { UserGoalsModel } from '@entities/goal/user-goals.model';

@Table
export class GoalModel extends Model<GoalModel> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => UserModel, () => UserGoalsModel)
  users: UserModel[];
}
