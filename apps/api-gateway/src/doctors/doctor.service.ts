import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class DoctorService {
  private docClient: ClientProxy;
  private userClient: ClientProxy;
  constructor(private configService: ConfigService) {
    this.docClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.get<string>('RABBITMQ_URL')],
        queue: 'doctor_queue',
      },
    });
    this.userClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:password@rabbitmq:5672'],
        queue: 'user_queue',
      },
    });
  }
  async fetchAllDoctor() {
    return this.docClient.send({ cmd: 'fetch_all_doctor' }, {});
  }
  async createDoctor(data: any) {
    // const user = await this.userClient.send('create_user', data);
    // if (!user) {
    //   throw new HttpException('Invalid User', HttpStatus.FORBIDDEN);
    // }
    return this.docClient.send({ cmd: 'create_doctor' }, data);
  }
}
