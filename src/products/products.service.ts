import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Array<Product> = [
    {
      id: '1',
      title: 'A Test 1',
      description: 'This is the 1º product',
      price: 1.99,
    },
    {
      id: '2',
      title: 'A Test 2',
      description: 'This is the 2º product',
      price: 24.5,
    },
    {
      id: '3',
      title: 'A Test 3',
      description: 'This is the 3º product',
      price: 86.45,
    },
    {
      id: '4',
      title: 'A Test 4',
      description: 'This is the 4º product',
      price: 420.69,
    },
  ];

  insert_product(title: string, desc: string, price: number): string {
    const prod_id = Math.random().toString();
    const new_product = new Product(prod_id, title, desc, price);
    this.products.push(new_product);
    return prod_id;
  }

  get_products(): Array<Product> {
    return [...this.products];
  }

  private find_product(id: string): [Product, number] {
    const productIndex = this.products.findIndex(value => {
      return value.id === id;
    });
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Porduto não encontrado');
    }
    return [product, productIndex];
  }

  get_single_product(product_id: string) {
    const [product, _] = this.find_product(product_id);
    return { ...product };
  }

  update_product(
    product_id: string,
    title: string,
    desc: string,
    price: number,
  ) {
    const [product, index] = this.find_product(product_id);
    const updated_product = { ...product };
    if (title) {
      updated_product.title = title;
    }
    if (desc) {
      updated_product.description = desc;
    }
    if (price) {
      updated_product.price = price;
    }
    this.products[index] = updated_product;
  }

  delete_product(product_id: string) {
    const [_, index] = this.find_product(product_id);
    this.products.splice(index, 1);
  }
}
