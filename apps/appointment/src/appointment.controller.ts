import { Controller, Get } from '@nestjs/common';
import { AppointmentService } from './appointment.service';

@Controller()
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  getHello(): string {
    return this.appointmentService.getHello();
  }
}
