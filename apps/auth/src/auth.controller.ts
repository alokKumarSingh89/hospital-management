import { Controller, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { CreateUserDTO } from './user.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('login')
  async login(@Payload() body: CreateUserDTO) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user)
      throw new RpcException({
        message: 'Invalid credentials',
        status: HttpStatus.UNAUTHORIZED,
      });
    return this.authService.login(user);
  }
}
