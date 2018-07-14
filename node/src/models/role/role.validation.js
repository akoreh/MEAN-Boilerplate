import Joi from 'joi';

export default {
    create: {
        body: {
            name: Joi.string().required(),
            number: Joi.number().required()
        }
    }
}