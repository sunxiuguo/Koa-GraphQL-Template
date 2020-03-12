import { InfoModal } from '../entities/info';
import { Context } from 'koa';

export const saveInfo = async (ctx: Context) => {
    const body = ctx.request.body;
    const info = new InfoModal(body);
    const saveResult = await info.save();

    if (saveResult) {
        ctx.body = {
            success: true,
            info: saveResult
        };
    } else {
        ctx.body = {
            success: false
        };
    }
};

export const fetchInfo = async (ctx: Context) => {
    const infos = await InfoModal.find({});
    if (infos.length) {
        ctx.body = {
            success: true,
            info: infos
        };
    } else {
        ctx.body = {
            success: false
        };
    }
};
