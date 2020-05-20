import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientService } from 'src/keycloak/client';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly products_service: ProductsService,
    private readonly client: ClientService,
  ) {}

  @Post()
  add_product(
    @Body('title') prod_title: string,
    @Body('description') prod_desc: string,
    @Body('price') prod_price: number,
  ): { id: string } {
    const generated_id = this.products_service.insert_product(
      prod_title,
      prod_desc,
      prod_price,
    );
    return { id: generated_id };
  }

  @Get()
  get_all_products(): Array<Product> {
    let teste = this.client.user();
    console.log(teste);
    console.log(teste.resource_access.applications);

    return this.products_service.get_products();
  }

  @Get(':id')
  get_product(@Param('id') prod_id: string) {
    return this.products_service.get_single_product(prod_id);
  }

  @Patch(':id')
  update_product(
    @Param('id') prod_id: string,
    @Body('title') prod_title: string,
    @Body('description') prod_desc: string,
    @Body('price') prod_price: number,
  ) {
    this.products_service.update_product(
      prod_id,
      prod_title,
      prod_desc,
      prod_price,
    );
    return null;
  }

  @Delete(':id')
  remove_product(@Param('id') prod_id: string) {
    this.products_service.delete_product(prod_id);
    return null;
  }
}
