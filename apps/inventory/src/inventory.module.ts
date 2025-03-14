import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { DataSource } from 'typeorm';

@Module({
  imports: [],
  controllers: [InventoryController],
  providers: [
    InventoryService,
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
export class InventoryModule {}
