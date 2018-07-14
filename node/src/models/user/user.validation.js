import Joi from 'joi';

//1 uppercase letter, atleast 1 number, atleast 6 characters
export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export default {
    signup: {
        body: {
            username: Joi.string(),
            email: Joi.string().email().required(),
            password: Joi.string().regex(passwordReg).required()
        }
    }
}