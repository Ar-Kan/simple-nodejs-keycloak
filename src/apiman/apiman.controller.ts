import { Controller, Get } from '@nestjs/common';
import { ApimanService } from './apiman.service';

@Controller('apiman')
export class ApimanController {
  constructor(private readonly apiman_service: ApimanService) {}

  @Get()
  get_algo() {
    return this.apiman_service.retorna_algumacoisa();
  }

  @Get(':id')
  get_algo_outro() {
    return this.apiman_service.retorna_algumacoisa();
  }
}
