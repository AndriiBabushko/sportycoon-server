import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LikeService } from '@entities/like/like.service';

@ApiTags('like', 'sportycoon')
@Controller('api/like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}
}
