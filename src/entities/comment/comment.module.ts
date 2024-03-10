import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentModel } from './comment.model';

@Module({
  imports: [SequelizeModule.forFeature([CommentModel])],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentModule {}
