import Koa from 'koa';
import Router from '@koa/router';
import { koaBody } from 'koa-body';
import koaStatic from 'koa-static';

import { STATIC_ROOT } from './common/config/contant';
import HomeController from './home/home.controller';

const app = new Koa();
const router = new Router();

HomeController.getInstance(router);

app
  .use(koaStatic(STATIC_ROOT))
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is started: http://localhost:3000')
});
