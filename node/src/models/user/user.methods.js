import config from '../../config/config';
import jwt from 'jsonwebtoken';
import {
    hashSync,
    compareSync
} from 'bcrypt-nodejs';
import * as roleUtil from '../role/role.util';

export function _hashPassword(password) {
    return hashSync(password);
}

export function _authenticate(password) {
    return compareSync(password, this.password);
}

export function _createToken() {
    return jwt.sign({
        _id: this._id
    }, config.JWT_SECRET);
}

export function _createConfirmToken() {
    return jwt.sign({
        _id: this._id
    }, config.CONFIRM_SECRET);
}

export async function _toAuthJSON() {
    //TODO: isAdmin

    return {
        _id: this._id,
        username: this.username,
        token: `Bearer ${this._createToken()}`,
        email: this.email
    };
}

//! Roles

export async function _getRoles() {
    const roles = [];

    if (this.roles && this.roles.length) {
        roles = await roleUtil.getRoles(this.roles.map(item => item_id));
    }

    return roles;
}

export async function _isAdmin() {
    if (!this.roles.length) {
        return false
    }

    try {
        const roles = await this._getRoles();
        const isAdmin = roles.find(item => item.number === 8080);

        return isAdmin ? true : false;

    } catch (err) {
        console.log('[User]._isAdmin:', err);
        return false;
    }
}