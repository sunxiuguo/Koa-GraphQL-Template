// 引入模块
import Koa from 'koa';
import KoaStatic from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import { connectDB } from './mongodb/index';
import { saveInfo, fetchInfo } from './controllers/info';
import { saveStudent, fetchStudent, fetchStudentDetail } from './controllers/student';

connectDB();

const app = new Koa();
const router = new Router();

// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

// 路由设置test
router.get('/test', ctx => {
    ctx.body = 'test page';
});

// info router
router.post('/saveinfo', saveInfo);
router.get('/info', fetchInfo);

// student router
router.post('/savestudent', saveStudent);
router.get('/student', fetchStudent);
router.get('/studentDetail', fetchStudentDetail);

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000);

console.log('graphQL server listen port: ' + 4000);
