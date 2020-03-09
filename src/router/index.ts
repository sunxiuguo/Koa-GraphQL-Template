import Router from 'koa-router';
import { saveInfo, fetchInfo } from '../controllers/info';
import { saveStudent, fetchStudent, fetchStudentDetail } from '../controllers/student';

const router = new Router();

router
    .post('/saveinfo', saveInfo)
    .get('/info', fetchInfo)
    .post('/savestudent', saveStudent)
    .get('/student', fetchStudent)
    .get('/studentDetail', fetchStudentDetail);

export { router };
