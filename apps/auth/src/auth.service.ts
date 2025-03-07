import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  ClientProxy,
  ClientProxyFactory,
  RpcException,
  Transport,
} from '@nestjs/microservices';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private userClient: ClientProxy;
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    this.userClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('RABBITMQ_URL')],
        queue: 'user_queue',
      },
    });
  }
  async validateUser(email: string, password: string) {
    return await this.userClient
      .send({ cmd: 'find_user_by_email' }, email)
      .subscribe(async (data) => {
        if (!data)
          throw new RpcException({
            message: 'Invalid credentials',
            status: HttpStatus.UNAUTHORIZED,
          });
        const isPasswordValid = await bcrypt.compare(password, data.password);
        if (!isPasswordValid)
          throw new RpcException({
            message: 'Invalid credentials',
            status: HttpStatus.UNAUTHORIZED,
          });
        return data;
      });
  }
  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
