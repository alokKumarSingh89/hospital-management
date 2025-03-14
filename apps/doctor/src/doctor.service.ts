import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DoctorEntity } from './models/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @Inject('DOCTOR_REPO') private docRepo: Repository<DoctorEntity>,
  ) {}

  async fetchAllDoctor() {
    console.log('ddd');
    return this.docRepo.find({});
  }

  create_doctor(data) {
    console.log(data);
    return data;
  }
}
