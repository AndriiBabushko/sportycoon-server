import {
  Column,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { CommentService } from './comment.service';
import { UserModel } from '@entities/user/user.model';
import { ProgramModel } from '@entities/program/program.model';
import { DataTypes } from 'sequelize';

@Table
export class CommentModel extends Model<CommentService> {
  @Column({ type: DataTypes.STRING, allowNull: false })
  message: string;

  @ForeignKey(() => UserModel)
  @Column({ type: DataTypes.INTEGER })
  userID: number;

  @ForeignKey(() => ProgramModel)
  @Column({ type: DataTypes.INTEGER })
  programID: number;

  @BelongsTo(() => ProgramModel, 'programID')
  program: ProgramModel;

  @BelongsTo(() => UserModel, 'userID')
  user: UserModel;
}
