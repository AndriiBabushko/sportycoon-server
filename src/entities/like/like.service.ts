import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LikeModel } from '@entities/like/like.model';

@Injectable()
export class LikeService {
  constructor(@InjectModel(LikeModel) private likeModel: typeof LikeModel) {}
}
