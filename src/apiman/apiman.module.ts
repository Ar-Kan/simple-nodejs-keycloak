import { ApimanService } from './apiman.service';
import { ApimanController } from './apiman.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ApimanController],
  providers: [ApimanService],
})
export class ApimanModule {}
