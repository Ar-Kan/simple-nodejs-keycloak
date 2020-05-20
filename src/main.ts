/**Ponto de entrada do servidor Nest */
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { headers, keycloak, memory_store } from './keycloak';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(headers);
  app.use(bodyParser.json());
  app.use(
    session({
      secret: '_QNhaSY=Cj@EsJny)W[21VL?zV$K}w!(',
      resave: false,
      saveUninitialized: true,
      store: memory_store,
    }),
  );
  app.use(keycloak.middleware());

  await app.listen(3000);
}
bootstrap();
