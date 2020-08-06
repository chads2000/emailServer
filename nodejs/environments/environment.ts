import * as dotenv from 'dotenv';
import * as path from 'path';

let isDev = false;

if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'local') {
  isDev = true;
}

if (process.env.NODE_ENV === 'local') {
  const enfFile = path.resolve(__dirname, `../../../env/.env.${isDev ? 'local' : 'production'}`);
  dotenv.config({
    path: enfFile,
  });
}

export const environment = {
  production: !isDev,
  host: 'email.com',
  jwt: {
    token: process.env.JWT_TOKEN,
    expirationSeconds: 10 * 365 * 24 * 60 * 60 * 1000,
    cookieName: 'Authentication',
  },
  databases: {
    mariadb: {
      host: process.env.MARIADB_HOST,
      port: parseInt(process.env.MARIADB_PORT, 10),
      user: process.env.MARIADB_USER,
      password: process.env.MARIADB_PASSWORD,
      database: process.env.MARIADB_DATABASE,
    },
  },
};
