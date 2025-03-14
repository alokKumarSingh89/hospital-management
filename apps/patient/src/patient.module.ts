import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { DataSource } from 'typeorm';
import { PatientEntity } from './models/patient.entity';

@Module({
  imports: [],
  controllers: [PatientController],
  providers: [
    PatientService,
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
      provide: 'PAT_REPO',
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository<PatientEntity>(PatientEntity),
      inject: ['DATA_SOURCE'],
    },
  ],
})
export class PatientModule {}
