// 引入模块
import 'reflect-metadata';
import Koa from 'koa';
import KoaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import { connectDB } from './mongodb/index';
import { router } from './router';
import { integrateGraphql } from './graphql';

connectDB();

const app = new Koa();

integrateGraphql(app).then(server => {
    // 使用 bodyParser 和 KoaStatic 中间件
    app.use(bodyParser());
    app.use(KoaStatic(__dirname + '/public'));

    app.use(router.routes()).use(router.allowedMethods());

    app.listen(4000, () => {
        console.log(`server running success at ${server.graphqlPath}`);
    });
});
