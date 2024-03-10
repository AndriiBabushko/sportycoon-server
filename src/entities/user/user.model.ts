import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { UserService } from './user.service';
import {
  FitnessLevelType,
  GenderType,
  GoalWeightType,
  HeightType,
  PerformanceType,
  WeightType,
} from '@src/types/User';
import { RoleModel } from '@entities/role/role.model';
import { UserRolesModel } from '@entities/role/user-roles.model';
import { GoalModel } from '@entities/goal/goal.model';
import { UserGoalsModel } from '@entities/goal/user-goals.model';

@Table
export class UserModel extends Model<UserService> {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING(255), unique: true })
  username: string;

  @Column({ type: DataType.STRING(255) })
  fullName: string;

  @Column({ type: DataType.STRING(255) })
  password: string;

  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @BelongsToMany(() => RoleModel, () => UserRolesModel)
  roles: RoleModel[];

  @Column({ type: DataType.STRING, allowNull: false })
  gender: GenderType;

  @Column({ type: DataType.JSON, allowNull: false })
  height: HeightType;

  @Column({ type: DataType.JSON, allowNull: false })
  weight: WeightType;

  @Column({ type: DataType.JSON, allowNull: false })
  goalWeight: GoalWeightType;

  @Column({ type: DataType.STRING, allowNull: false })
  fitnessLevel: FitnessLevelType;

  @BelongsToMany(() => GoalModel, () => UserGoalsModel)
  goals: GoalModel[];

  @Column({ type: DataType.JSON, allowNull: false })
  performance: PerformanceType;

  @Column({ type: DataType.STRING, defaultValue: null })
  avatar: string | null;

  @Column({ type: DataType.STRING, defaultValue: null })
  city: string | null;

  @Column({ type: DataType.STRING, defaultValue: null })
  country: string | null;

  @Column({ type: DataType.STRING, defaultValue: null })
  bio: string | null;
}
