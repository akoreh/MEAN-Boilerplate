import Status from 'http-status';

import Role from './role.model';

export async function createRole(req, res) {
    const role = await Role.create(req.body);
    return res.status(Status.CREATED).json(role);
}