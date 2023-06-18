import fs from 'fs';

import Koa from 'koa';
import Router from '@koa/router';
import { koaBody } from 'koa-body';
import koaStatic from 'koa-static';

import log4jKoaMiddleware from './common/middleware/log4js';
import { appLogger } from './common/config/log4js';

import { HOST, PORT, STATIC_ROOT } from './common/config/contant';

import { rewriteHostFile } from './common/utils/wxmpServerHost';

import HomeController from './home/home.controller';

const app = new Koa();
const router = new Router();

HomeController.getInstance(router);

app
  .use(koaBody())
  .use(log4jKoaMiddleware)
  .use(koaStatic(STATIC_ROOT))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => {
  appLogger.info(`server is started: ${HOST}`)
});

rewriteHostFile();
