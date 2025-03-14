import { Controller, Get } from '@nestjs/common';
import { TelemedicineService } from './telemedicine.service';

@Controller()
export class TelemedicineController {
  constructor(private readonly telemedicineService: TelemedicineService) {}

  @Get()
  getHello(): string {
    return this.telemedicineService.getHello();
  }
}
