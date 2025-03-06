import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersModule, {
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://user:password@rabbitmq:5672"],
      queue: 'user_queue',
    },
  });
  await app.listen();
}
bootstrap();
