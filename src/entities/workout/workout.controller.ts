import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WorkoutService } from '@entities/workout/workout.service';

@ApiTags('workout', 'sportycoon')
@Controller('api/workout')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}
}
