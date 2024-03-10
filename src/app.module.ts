import { Module } from '@nestjs/common';
import { UserModule } from '@entities/user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from '@config/sequelizeConfig.service';
import { databaseConfig } from '@config/configuration';
import { AuthModule } from '@entities/auth/auth.module';
import { RoleModule } from '@entities/role/role.module';
import { GoalModule } from '@entities/goal/goal.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    ConfigModule.forRoot({
      load: [databaseConfig],
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    UserModule,
    AuthModule,
    // ProgramModule,
    // CommentModule,
    // LikeModule,
    // WorkoutModule,
    // PartModule,
    GoalModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
