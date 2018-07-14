import {
    Router
} from 'express';
import {
    authLocal,
    authJWT
} from '../../services/auth.service';

const router = new Router();

export default router;