import { Module } from '@nestjs/common';
import { PartController } from './part.controller';
import { PartService } from './part.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PartModel } from '@entities/part/part.model';

@Module({
  imports: [SequelizeModule.forFeature([PartModel])],
  controllers: [PartController],
  providers: [PartService],
})
export class PartModule {}
