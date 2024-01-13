import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';
import * as process from 'process';

export const sqlConfig = registerAs('database', () => ({
  dialect: <Dialect>process.env.DATABASE_DIALECT || 'mysql',
  logging: process.env.DATABASE_LOGGING === 'true',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: process.env.DATABASE_AUTOLOADING_ENTITIES === 'true',
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
}));
