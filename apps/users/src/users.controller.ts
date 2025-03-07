import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { CreateUserDTO } from './user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  private acknowledge(context) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);
  }
  @MessagePattern('create_user')
  async createUser(@Payload() user: CreateUserDTO, @Ctx() context: RmqContext) {
    this.acknowledge(context);
    return this.usersService.createUser(user);
  }

  @MessagePattern('all_user')
  async index(@Ctx() context: RmqContext) {
    this.acknowledge(context);
    return this.usersService.list_all();
  }

  @MessagePattern({ cmd: 'find_user_by_email' })
  async findUserByEmail(email: string) {
    return this.usersService.findUserByEmail(email);
  }
}
