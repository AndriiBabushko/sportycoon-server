import { Model, Table } from 'sequelize-typescript';
import { WorkoutService } from '@entities/workout/workout.service';

@Table
export class WorkoutModel extends Model<WorkoutService> {}
