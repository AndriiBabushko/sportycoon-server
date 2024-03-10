import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PartModel } from '@entities/part/part.model';

@Injectable()
export class PartService {
  constructor(@InjectModel(PartModel) private partModel: typeof PartModel) {}
}
