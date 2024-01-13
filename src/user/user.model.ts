import { Column, Model, Table } from 'sequelize-typescript';
import { UserService } from './user.service';

@Table
export class UserModel extends Model<UserService> {
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
