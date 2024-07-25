const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const logger = (ctx, next) => {
    console.log(`${ctx.url}--${ctx.method}--${new Date()}`);
    return next();
}

const home = (ctx) => {
    ctx.body = '<h2>首页</h2>';
}

const about = (ctx) => {
    ctx.body = '<a href="/home">去首页</a>';
}

app.use(logger);
router.get('/home', home);
router.get('/about', about);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('listening on 3000');
});