import { Module } from '@nestjs/common';
import { TelemedicineController } from './telemedicine.controller';
import { TelemedicineService } from './telemedicine.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [],
  controllers: [TelemedicineController],
  providers: [
    TelemedicineService,
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
export class TelemedicineModule {}
