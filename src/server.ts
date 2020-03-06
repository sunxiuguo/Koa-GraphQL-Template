// 引入模块
import Koa from 'koa';
import KoaStatic from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

// 路由设置test
router.get('/test', ctx => {
    ctx.body = 'test page';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000);

console.log('graphQL server listen port: ' + 4000);
