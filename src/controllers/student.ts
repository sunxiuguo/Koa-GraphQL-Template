import { StudentModel } from '../mongodb/scheme/student';
import { Context } from 'koa';

export const saveStudent = async (ctx: Context) => {
    const body = ctx.request.body;
    const info = new StudentModel(body);
    const saveResult = await info.save();

    if (saveResult) {
        ctx.body = {
            success: true,
            student: saveResult
        };
    } else {
        ctx.body = {
            success: false
        };
    }
};

export const fetchStudent = async (ctx: Context) => {
    const students = await StudentModel.find({});
    if (students.length) {
        ctx.body = {
            success: true,
            student: students
        };
    } else {
        ctx.body = {
            success: false
        };
    }
};

export const fetchStudentDetail = async (ctx: Context) => {
    // 关联查询info表的数据
    const students = await StudentModel.find({})
        .populate('info', 'hobby height weight')
        .exec();

    if (students.length) {
        ctx.body = {
            success: true,
            student: students
        };
    } else {
        ctx.body = {
            success: false
        };
    }
};
