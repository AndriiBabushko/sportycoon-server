import { Column, Model, Table } from 'sequelize-typescript';
import { UsersService } from './users.service';

@Table
export class UsersModel extends Model<UsersService> {
  @Column
  username: string;

  @Column
  fullName: string;

  @Column
  password: string;

  @Column
  email: string;

  // @Column
  // gender: GenderType;
  //
  // @Column
  // height: HeightType;
  //
  // @Column
  // weight: WeightType;
  //
  // @Column
  // goalWeight: GoalWeightType;
  //
  // @Column
  // fitnessLevel: FitnessLevelType;
  //
  // @Column
  // goals: GoalType[];
  //
  // @Column
  // performance: PerformanceType;

  @Column
  avatar: string;

  @Column
  city: string;

  @Column
  country: string;

  @Column
  bio: string;
}
