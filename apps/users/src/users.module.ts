import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { User } from './models/user.entity';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'postgres',
          host: 'user_db',
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
      provide: 'USER_REPO',
      useFactory: (dataSource: DataSource) => {
        return dataSource.getRepository<User>(User);
      },
      inject: ['DATA_SOURCE'],
    },
  ],
})
export class UsersModule {}
