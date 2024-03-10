import { Module } from '@nestjs/common';
import { ProgramController } from './program.controller';
import { ProgramService } from './program.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProgramModel } from './program.model';

@Module({
  imports: [SequelizeModule.forFeature([ProgramModel])],
  controllers: [ProgramController],
  providers: [ProgramService],
  exports: [ProgramService],
})
export class ProgramModule {}
