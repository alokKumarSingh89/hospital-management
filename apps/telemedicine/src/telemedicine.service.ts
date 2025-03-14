import { Injectable } from '@nestjs/common';

@Injectable()
export class TelemedicineService {
  getHello(): string {
    return 'Hello World!';
  }
}
