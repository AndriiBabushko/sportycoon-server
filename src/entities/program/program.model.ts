import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ProgramService } from './program.service';
import { FitnessLevelType } from '@src/types/other/FitnessLevel';
import { ProgramType } from '@src/types/other/Program';
import { PartModel } from '@entities/part/part.model';
import { CommentModel } from '@entities/comment/comment.model';
import { LikeModel } from '@entities/like/like.model';
import { DataTypes } from 'sequelize';

@Table
export class ProgramModel extends Model<ProgramService> {
  @Column({ type: DataTypes.STRING })
  fitnessLevel: FitnessLevelType;

  @Column({ type: DataTypes.STRING })
  type: ProgramType;

  @Column({ type: DataTypes.STRING })
  title: string;

  @Column({ type: DataTypes.STRING })
  introVideo: string;

  @HasMany(() => LikeModel, 'programID')
  likes: LikeModel[];

  @HasMany(() => CommentModel, 'programID')
  comments: CommentModel[];

  @HasMany(() => PartModel, 'programID')
  parts: PartModel[];
}
