import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from './models/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './user.dto';
import { RpcException } from '@nestjs/microservices';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_REPO') private userRepo: Repository<User>) {}

  async generatePassword(password: string) {
    if (password) {
      const salt = await bcrypt.genSalt(5);
      password = await bcrypt.hash(password, salt);
      return password;
    }
  }

  async validatePassword(password: string, user): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }

  async findUserByEmail(email: string) {
    return this.userRepo.findOne({
      where: {
        email,
      },
    });
  }
  async createUser(newUser: CreateUserDTO) {
    let user = await this.findUserByEmail(newUser.email);
    if (user != null) {
      throw new RpcException({
        message: 'User Already Exists ',
        status: HttpStatus.FORBIDDEN,
      });
    }
    const password = await this.generatePassword(newUser.password);
    const create_user = new User();
    create_user.email = newUser.email;
    create_user.password = password;
    user = await this.userRepo.save(create_user);
    delete user.password;
    return user;
  }

  async list_all() {
    return this.userRepo.find({});
  }
}
