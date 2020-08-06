import { createParamDecorator, ExecutionContext, Logger } from '@nestjs/common';
import { JWT } from '@rootShared/models/jwt.model';

const logger = new Logger('JWTToken');

export const ReqUser = createParamDecorator(
  (data, ctx: ExecutionContext): JWT => {
    let req = null;
    if (ctx.switchToHttp) {
      req = ctx.switchToHttp().getRequest();
    } else {
      req = ctx;
    }

    if (!!req.user) {
      return !!data ? req.user[data] : req.user;
    }
    return null;
  }
);
