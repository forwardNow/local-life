const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
});

router.get('/getUser', (ctx, next) => {
  const query = ctx.request.query; // json
  ctx.success({ id: 1, name: '张三' + query.id });
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
