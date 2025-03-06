import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  ClientRMQ,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private userClient: ClientProxy;
  constructor(private configService: ConfigService) {
    this.userClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: { urls: ["amqp://user:password@rabbitmq:5672"], queue: 'user_queue' },
    });
  }
  async getHello() {
    console.log("ddd")
    return this.userClient.send('hello',{})
  }
}
