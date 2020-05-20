/**
 *
 */
import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * localhost:3000/
 */
@Controller()
export class AppController {
  constructor(
    /**
     * Só funciona pq foi passado "AppService" como
     * "provider" no app.module
     */ private readonly appService: AppService,
  ) {}

  /** / */
  @Get()
  @Header(
    'Content-Type',
    'application/json',
  ) /**se pode definir manualmente a response header */
  getHello(): string {
    /**
     * NestJs automaticamente define a response header
     * de acordo com o tipo de resposta
     */
    return this.appService.getHello();
  }
}
