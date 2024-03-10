import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateGoalDTO } from '@entities/goal/dto/create-goal.dto';
import { GoalModel } from '@entities/goal/goal.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class GoalService {
  constructor(@InjectModel(GoalModel) private goalModel: typeof GoalModel) {}

  async createGoal(createGoalDTO: CreateGoalDTO) {
    const goal = await this.goalModel.create(createGoalDTO);
    console.log(goal);
    return {
      goal,
      message: 'Goal created successfully!',
      status: HttpStatus.CREATED,
    };
  }

  async getGoalByName(name: string) {
    const goal = await this.goalModel.findOne({ where: { name } });
    return {
      goal,
      message: 'Goal retrieved successfully!',
      status: HttpStatus.OK,
    };
  }
}
