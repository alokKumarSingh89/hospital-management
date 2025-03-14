import { Module } from '@nestjs/common';
import { LaboratoryController } from './laboratory.controller';
import { LaboratoryService } from './laboratory.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [],
  controllers: [LaboratoryController],
  providers: [
    LaboratoryService,
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
export class LaboratoryModule {}
