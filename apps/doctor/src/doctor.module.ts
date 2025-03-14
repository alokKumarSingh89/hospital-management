import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { DataSource } from 'typeorm';

import { ConfigModule } from '@nestjs/config';
import { DoctorEntity } from './models/doctor.entity';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [DoctorController],
  providers: [
    DoctorService,
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
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        });
        return dataSource.initialize();
      },
    },
    {
      provide: 'DOCTOR_REPO',
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository<DoctorEntity>(DoctorEntity),
      inject: ['DATA_SOURCE'],
    },
  ],
})
export class DoctorModule {}
