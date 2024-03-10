import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProgramService } from '@entities/program/program.service';

@ApiTags('program', 'sportycoon')
@Controller('api/program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}
}
