/**
 * services, diferentemente do Angular, não são disponíveis
 * para toda a aplicação, possui o escopo apenas do module
 * através do provider
 */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApimanModule } from './apiman/apiman.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { keycloak } from './keycloak';
import { ClientService } from './keycloak/client';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ApimanModule,
    ProductsModule,
  ] /**importa outros módulos, é como o app é "unido" */,
  controllers: [
    AppController,
  ] /**controlam como operações nos requests e envia responses */,
  providers: [ClientService, AppService] /**serviços extras */,
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(keycloak.protect('user'))
      .exclude('apiman', 'apiman/(.*)')
      .forRoutes('*');
  }
}
