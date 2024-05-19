import { Module } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumResolver } from './forum.resolver';

@Module({
  providers: [ForumService, ForumResolver]
})
export class ForumModule {}
