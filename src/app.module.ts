import { Module } from '@nestjs/common';
import { UserModule } from '@user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from '@auth/auth.module';
import { join } from 'path';
import { ShopModule } from './shop/shop.module';
import { ForumModule } from './forum/forum.module';
import { TrainingModule } from './training/training.module';
import { GenderScalar } from '@scalars/gender.scalar';
import { HeightUnitScalar } from '@scalars/height-unit.scalar';
import { WeightUnitScalar } from '@scalars/weight-unit.scalar';
import { FitnessLevelScalar } from '@scalars/fitness-level.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      introspection: true,
      csrfPrevention: true,
      context: ({ req }) => ({
        headers: req.headers,
      }),
    }),
    UserModule,
    AuthModule,
    ShopModule,
    ForumModule,
    TrainingModule,
  ],
  providers: [
    GenderScalar,
    HeightUnitScalar,
    WeightUnitScalar,
    FitnessLevelScalar,
  ],
})
export class AppModule {}
