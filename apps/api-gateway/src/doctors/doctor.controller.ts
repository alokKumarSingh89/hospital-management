import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('doctors')
@UseGuards(JwtAuthGuard)
export class DoctorController {
  private logger = new Logger(DoctorController.name);
  constructor(private readonly docService: DoctorService) {}

  @Get()
  async fetchAllDoctor() {
    return this.docService.fetchAllDoctor();
  }

  @Post()
  async createDoctor(@Body() data) {
    return this.docService.createDoctor(data);
  }
}
