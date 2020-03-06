// 引入mongoose模块
import mongoose from 'mongoose';
import config from '../config';
// import { StudentModel } from './scheme/student';
// import { InfoModal } from './scheme/info';

// 链接mongodb
export const database = () => {
    mongoose.set('debug', true);

    mongoose.connect(config.dbPath);

    mongoose.connection.on('disconnected', () => {
        mongoose.connect(config.dbPath);
    });
    mongoose.connection.on('error', err => {
        console.error(err);
    });

    mongoose.connection.on('open', async () => {
        console.log('Connected to MongoDB ', config.dbPath);
    });
};
