import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { GoalService } from '@entities/goal/goal.service';
import { CreateGoalDTO } from '@entities/goal/dto/create-goal.dto';

@Controller('api/goal')
export class GoalController {
  constructor(private goalService: GoalService) {}

  // @ApiBody({ type: CreateGoalRequest })
  // @ApiOkResponse({ type: CreateGoalResponse })
  // @ApiConflictResponse({ type: SignUpUserConflictResponse })
  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  async createGoal(@Body() createGoalDTO: CreateGoalDTO) {
    return await this.goalService.createGoal(createGoalDTO);
  }

  // @ApiBody({ type: CreateGoalRequest })
  // @ApiOkResponse({ type: CreateGoalResponse })
  // @ApiConflictResponse({ type: SignUpUserConflictResponse })
  @Get('/:name')
  @HttpCode(HttpStatus.OK)
  async getGoalByName(@Param('name') name: string) {
    return await this.goalService.getGoalByName(name);
  }
}
