import { Module } from '@nestjs/common';
import { ReportingController } from './reporting.controller';
import { ReportingService } from './reporting.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [],
  controllers: [ReportingController],
  providers: [
    ReportingService,
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
export class ReportingModule {}
