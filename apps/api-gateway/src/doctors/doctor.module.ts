import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [DoctorController],
  providers: [JwtAuthGuard, DoctorService],
})
export class DoctorModule {}
