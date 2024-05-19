import { Module } from '@nestjs/common';
import { UserModule } from '@user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from '@auth/auth.module';
import { join } from 'path';
import { TrainingProgramsService } from './training-programs/training-programs.service';
import { TrainingProgramsModule } from './training-programs/training-programs.module';
import { ShopService } from './shop/shop.service';
import { ShopModule } from './shop/shop.module';
import { ForumModule } from './forum/forum.module';
import { TrainingModule } from './training/training.module';
import { StaticModule } from './static/static.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UserModule,
    AuthModule,
    TrainingProgramsModule,
    ShopModule,
    ForumModule,
    TrainingModule,
    StaticModule,
  ],
  providers: [TrainingProgramsService, ShopService],
})
export class AppModule {}
