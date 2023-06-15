const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
});

/*
请求：
  http://localhost:3000/getUser?id=1

响应：
  Content-Type: application/json; charset=utf-8

  {
    "id": 1,
    "name": "张三"
  }
 */
router.get('/getUser', (ctx, next) => {
  const { query } = ctx.request;

  // { id: '1' }
  console.log('query: ', query);

  ctx.response.body = { id: 1, name: '张三' };
})

/*
请求：
  http://localhost:3000/user/2

响应：
  Content-Type: application/json; charset=utf-8

  {
      "id": 2,
      "name": "李四"
  }
 */
router.get('/user/:id', (ctx, next) => {
  const { params } = ctx;

  // { id: '2' }
  console.log('params: ', params);

  ctx.response.body = { id: 2, name: '李四' };
})

app
  .use(jsonResultMiddleware)
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is started: http://localhost:3000')
});


// middleware

function jsonResultMiddleware(ctx, next) {
  ctx.success = function (data, status = 0, message = 'ok') {
    ctx.type = 'json';
    ctx.body = { status, message, data }
  }
  ctx.fail = function (data = null, status = -1, message = 'error') {
    ctx.type = 'json';
    ctx.body = { status, message, data }
  }
  next();
}
