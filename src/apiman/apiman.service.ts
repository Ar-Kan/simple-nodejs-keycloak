import { Injectable } from '@nestjs/common';

@Injectable()
export class ApimanService {
  retorna_algumacoisa() {
    return { a: 1, b: 2, c: 3 };
  }
}
