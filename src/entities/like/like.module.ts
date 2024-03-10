import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { LikeModel } from '@entities/like/like.model';
import { LikeController } from '@entities/like/like.controller';

@Module({
  imports: [SequelizeModule.forFeature([LikeModel])],
  controllers: [LikeController],
  providers: [LikeService],
  exports: [LikeService],
})
export class LikeModule {}
