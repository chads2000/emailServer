import { WinstonLoggerService } from '@lupu60/nestjs-toolbox';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as winston from 'winston';

import { environment } from '@environments/environment';
import { AppModule } from './app.module';

const corsOptions: CorsOptions = {
  origin: function(origin, callback) {
    callback(null, true);
    return;

    const localByPass = !environment.production && /^(?:https?:\/\/)?localhost.*/.test(origin);

    const regEx = new RegExp(`^(?:https:\/\/)?.*\.${environment.host}`);
    if (regEx.test(origin) || localByPass) {
      // remove 1 after development
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  allowedHeaders: ['Cache-Control', 'Content-Type', 'X-Auth-Client', 'X-Auth-Token'],
  methods: ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT'],
  credentials: true,
};

async function bootstrap() {
  const expressServer = express();

  const app = await NestFactory.create(AppModule, {
    logger: new WinstonLoggerService({
      projectName: 'EmailServer',
      transports: [
        new winston.transports.Console({
          level: !environment.production ? 'info' : 'warn',
          format: winston.format.combine(winston.format.colorize(), winston.format.prettyPrint()),
        }),
      ],
    }),
  });
  app.enableCors(corsOptions);
  app.use(cookieParser());

  await app.listen(3030);
}

bootstrap();
