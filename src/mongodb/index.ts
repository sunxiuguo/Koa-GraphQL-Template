// 引入mongoose模块
import mongoose from 'mongoose';
import config from '../config';

// 链接mongodb
export const connectDB = () => {
    console.log('ready to connect database');
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
