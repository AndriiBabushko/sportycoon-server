import { Module } from '@nestjs/common';
import { GoalController } from './goal.controller';
import { GoalService } from './goal.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GoalModel } from '@entities/goal/goal.model';
import { UserModel } from '@entities/user/user.model';
import { UserGoalsModel } from '@entities/goal/user-goals.model';

@Module({
  imports: [SequelizeModule.forFeature([GoalModel, UserModel, UserGoalsModel])],
  controllers: [GoalController],
  providers: [GoalService],
  exports: [GoalService],
})
export class GoalModule {}
