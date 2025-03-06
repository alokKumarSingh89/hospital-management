import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class UserService {
  private userClient: ClientProxy;
  constructor(private configService: ConfigService) {
    this.userClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:password@rabbitmq:5672'],
        queue: 'user_queue',
      },
    });
  }
  async list_all() {
    return this.userClient.send('all_user', {});
  }

  async createUser(data) {
    return this.userClient.send('create_user', data);
  }
}
