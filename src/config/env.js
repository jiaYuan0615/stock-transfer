import 'dotenv/config';

const env = {
  Env: process.env.APP_ENV,
  Host: process.env.APP_HOST,
  Port: process.env.APP_PORT,
  Protocol: process.env.APP_PROTOCOL,
  AppKey: process.env.APP_KEY,
  DatabaseHost: process.env.DB_HOST,
  Database: process.env.DB_DATABASE,
  DatabasePort: process.env.DB_PORT,
  DatabaseDialect: process.env.DB_DIALECT,
  DatabaseUsername: process.env.DB_USERNAME,
  DatabasePassword: process.env.DB_PASSWORD,
  DatabaseLogging: process.env.DB_LOGGING,
  DatabaseOperator: process.env.DB_OPERATOR,
  JWTExpireTime: process.env.JWT_EXPIRE,
};

export default env;
