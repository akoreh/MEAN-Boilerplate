import userRoutes from './user/user.routes';
import roleRoutes from './role/role.routes';

const prefix = '/api/v1';

export default app => {
    app.use(`${prefix}/users`, userRoutes);
    app.use(`${prefix}/roles`, roleRoutes);
}