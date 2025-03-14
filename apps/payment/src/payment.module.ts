import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [],
  controllers: [PaymentController],
  providers: [
    PaymentService,
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'postgres',
          host: 'db',
          port: 5432,
          username: 'alok',
          password: 'alok',
          database: 'hospital',
          entities: [__dirname + '/**/*.entity.{ts,js}'],
          synchronize: true,
        });
        return dataSource.initialize();
      },
    },
  ],
})
export class PaymentModule {}
