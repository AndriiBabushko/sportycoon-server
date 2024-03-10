import { ForeignKey, Model, Table } from 'sequelize-typescript';
import { PartService } from '@entities/part/part.service';
import { ProgramModel } from '@entities/program/program.model';

@Table
export class PartModel extends Model<PartService> {
  @ForeignKey(() => ProgramModel)
  programID: number;
}
