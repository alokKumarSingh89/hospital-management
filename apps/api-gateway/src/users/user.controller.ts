import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async list_all() {
    return this.userService.list_all();
  }

  @Post('/register')
  async createUser(@Body() data) {
    return this.userService.createUser(data);
  }

  @Post('/login')
  async login(@Body() data) {
    return this.userService.login(data);
  }
}
