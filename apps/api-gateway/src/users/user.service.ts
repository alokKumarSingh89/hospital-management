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
  private authClient: ClientProxy;
  constructor(private configService: ConfigService) {
    this.userClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.get<string>('RABBITMQ_URL')],
        queue: 'user_queue',
      },
    });
    this.authClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.get<string>('RABBITMQ_URL')],
        queue: 'auth_queue',
      },
    });
  }
  async list_all() {
    return this.userClient.send('all_user', {});
  }

  async createUser(data) {
    return this.userClient.send('create_user', data);
  }

  async login(data) {
    return this.authClient.send('login', data);
  }
}
