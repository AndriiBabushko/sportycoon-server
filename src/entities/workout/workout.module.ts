import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkoutModel } from '@entities/workout/workout.model';

@Module({
  imports: [SequelizeModule.forFeature([WorkoutModel])],
  providers: [WorkoutService],
  exports: [WorkoutService],
})
export class WorkoutModule {}
