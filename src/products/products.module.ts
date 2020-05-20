import { Module } from '@nestjs/common';
import { ClientService } from 'src/keycloak/client';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, ClientService],
})
export class ProductsModule {}
