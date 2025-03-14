import { Module } from '@nestjs/common';
import { PharmacyController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [],
  controllers: [PharmacyController],
  providers: [
    PharmacyService,
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
  ],
})
export class PharmacyModule {}
