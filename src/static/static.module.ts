import { Module } from '@nestjs/common';
import { StaticService } from './static.service';
import { StaticResolver } from './static.resolver';

@Module({
  providers: [StaticService, StaticResolver],
})
export class StaticModule {}
