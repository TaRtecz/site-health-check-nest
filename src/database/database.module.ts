import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Config } from '../config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'mysql',
          host: Config.dbHost,
          port: Number(Config.dbPort),
          username: Config.dbUsername,
          password: Config.dbPass,
          database: Config.dbName,
          autoLoadEntities: true,
          logging: true,
          retryAttempts: Infinity,
          retryDelay: 1000,
          extra: { connectionLimit: Config.dbConnectionLimit },
        };
      },
    }),
  ],
})
export class DatabaseModule {}
