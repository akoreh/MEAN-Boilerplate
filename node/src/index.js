import express from 'express';
import http from 'http';
import moment from 'moment';

import * as log from './services/log.service';

//! Config
import config from './config/config';

//! MongoDB
import './config/db';

//! Init server
const app = express();
const server = http.Server(app);

//! Init middlewares
import middlewares from './config/middlewares';
middlewares(app);

//! Init socket

//! Init API Routes
import apiRoutes from './models/model-routes';
apiRoutes(app);

//! ERROR HANDLING (MUST BE LAST)
app.use((err, req, res, next) => {
    log.error(err);
    return res.status(400).send(err);
});

//! Listen

server.listen(config.PORT, err => {
    if (err) {
        throw err;
    } else {
        console.log(log.pad(90, ' '));
        console.log(log.pad(90, ' '));
        console.log(log.pad(90, ' '));
        log.info(log.pad(90, '*'));
        log.success(`Server listening on port ${config.PORT} - ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
        log.info(log.pad(90, '*'));
        log.success(`Running on  ${process.env.NODE_ENV}`);
    }
});