import Application, { ParameterizedContext } from 'koa';
import { accessLogger } from '../config/log4js';

export default async function log4jKoaMiddleware(ctx: Application.ParameterizedContext, next: Application.Next) {
  const {
    method,
    url,
    body: reqBody
  } = ctx.request;

  const fmtReqBody = JSON.stringify(reqBody);

  await next();

  const {
    body: resBody,
  } = ctx.response;

  const fmtResBody = JSON.stringify(resBody);

  accessLogger.info(`${ method } ${ url } ${ fmtReqBody } - ${ fmtResBody }`);
}
