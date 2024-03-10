import {
  Column,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { UserModel } from '@entities/user/user.model';
import { LikeService } from './like.service';

@Table
export class LikeModel extends Model<LikeService> {
  @ForeignKey(() => UserModel)
  @Column
  userID: number;

  @BelongsTo(() => UserModel, 'userID')
  user: UserModel;
}
