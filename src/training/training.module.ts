import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingResolver } from './training.resolver';

@Module({
  providers: [TrainingService, TrainingResolver],
})
export class TrainingModule {}
