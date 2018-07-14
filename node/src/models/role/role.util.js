import Role from './role.model';

export async function getRoles(idRoles) {
    const query = idRoles && idRoles.length ? {
        _id: {
            $in: idRoles
        }
    } : {};

    return await Role.find(query);
}