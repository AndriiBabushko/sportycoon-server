import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PartService } from '@entities/part/part.service';

@ApiTags('part', 'sportycoon')
@Controller('api/part')
export class PartController {
  constructor(private readonly partService: PartService) {}
}
