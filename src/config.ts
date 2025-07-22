import { config, DotenvParseOutput } from 'dotenv';

export const configResult = config();

export enum NodeEnv {
  development = 'development',
  production = 'production',
}

const {
  BOT_TOKEN,
  DB_CONNECTION_LIMIT,
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_USERNAME,
  LOCALHOST,
  NODE_ENV,
  PORT,
  TG_BOT_TOKEN,
} = process.env as DotenvParseOutput;

export class Config {
  static botToken = BOT_TOKEN;
  static tgBotToken = TG_BOT_TOKEN;
  static dbConnectionLimit = DB_CONNECTION_LIMIT || 3;
  static dbHost = DB_HOST;
  static dbName = DB_NAME;
  static dbPass = DB_PASS;
  static dbPort = DB_PORT;
  static dbUsername = DB_USERNAME;
  static localhost = LOCALHOST ?? 'https://127.0.0.1';
  static isLocalhost = Config.localhost === 'http://localhost:3005';
  static nodeEnv = NODE_ENV;
  static port = PORT ?? 3000;
}
