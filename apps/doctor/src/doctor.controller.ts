import { Controller } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { DoctorDTO } from './doctor.dto';

@Controller()
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}
  private acknowledge(context) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);
  }
  @MessagePattern({ cmd: 'fetch_all_doctor' })
  async list_doctor(@Ctx() context: RmqContext) {
    this.acknowledge(context);
    return this.doctorService.fetchAllDoctor();
  }

  @MessagePattern({ cmd: 'create_doctor' })
  async create_doctor(
    @Ctx() context: RmqContext,
    @Payload() doctor: DoctorDTO,
  ) {
    this.acknowledge(context);
    return this.doctorService.create_doctor(doctor);
  }
}
