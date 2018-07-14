import config from './config';
import moment from 'moment';
import mongoose from 'mongoose';

import * as log from '../services/log.service';


mongoose.Promise = global.Promise;

try {
    mongoose.connect(config.MONGO_URL);
} catch (err) {
    mongoose.createConnection(config.MONGO_URL, {
        useNewUrlParser: true
    });
}

mongoose.connection
    .once('open', () => {
        log.info(log.pad(90, '*'));
        log.success(`MongoDB Connection established! - ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
        log.info(log.pad(90, '*'));
    })
    .on('error', err => {
        log.error(err);
        throw err;
    });