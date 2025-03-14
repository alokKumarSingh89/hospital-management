import { NestFactory } from '@nestjs/core';
import { TelemedicineModule } from './telemedicine.module';

async function bootstrap() {
  const app = await NestFactory.create(TelemedicineModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
