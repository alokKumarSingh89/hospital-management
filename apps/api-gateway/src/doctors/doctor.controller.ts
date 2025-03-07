import { Controller, Get, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly docService: DoctorService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getHello() {
    return this.docService.getHello();
  }
}
