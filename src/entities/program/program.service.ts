import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProgramModel } from './program.model';

@Injectable()
export class ProgramService {
  constructor(
    @InjectModel(ProgramModel) private programModel: typeof ProgramModel,
  ) {}
}
