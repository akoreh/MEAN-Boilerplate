import mongoose, {
    Schema
} from 'mongoose';

import validator from 'validator';

import {
    passwordReg
} from './user.validation';

const UserSchema = new Schema({

    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        validate: {
            validator(email) {
                if (email && email.length) {
                    return validator.isEmail(email);
                }
                return false;
            },
            message: 'Supplied email is not a valid email!'
        }
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    isConfirmed: {
        type: Boolean,
        required: true,
        default: false
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }]
}, {
    timestamps: true
});

UserSchema.pre('save', function (next) {

    //! Prevent password reincription if the user record is updated unless password is updated

    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
    }

});


//! Methods
import * as userMethods from './user.methods';
UserSchema.methods = userMethods;

export default mongoose.model('User', UserSchema);