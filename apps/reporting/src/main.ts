import { NestFactory } from '@nestjs/core';
import { ReportingModule } from './reporting.module';

async function bootstrap() {
  const app = await NestFactory.create(ReportingModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
