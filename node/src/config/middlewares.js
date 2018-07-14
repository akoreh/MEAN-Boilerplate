import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';


const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export default app => {

    //! Body parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '16mb'
    }));

    app.use(passport.initialize());

    if (isDev) {
        app.use(cors());
    }
}