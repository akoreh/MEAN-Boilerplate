import {
    Router
} from 'express';
import validate from 'express-validation';

import {
    authJWT
} from '../../services/auth.service';
import errHandler from '../../config/error';
import * as roleController from './role.controller';
import roleValidation from './role.validation';

const router = new Router();

//TODO: AuthJWT

router.post('/', authJWT, validate(roleValidation.create), errHandler(roleController.createRole));


export default router;