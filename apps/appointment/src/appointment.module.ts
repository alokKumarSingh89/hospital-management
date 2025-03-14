import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [],
  controllers: [AppointmentController],
  providers: [
    AppointmentService,
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'postgres',
          host: 'db',
          port: 5432,
          database: 'hospital',
          username: 'alok',
          password: 'alok',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        });
        return dataSource.initialize();
      },
    },
  ],
})
export class AppointmentModule {}
