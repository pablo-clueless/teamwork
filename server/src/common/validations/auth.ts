import Joi from "joi";

//TODO: this is still in progress.

export const signInSchema = {
    inputSchema: Joi.object().keys({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().required(),
        username: Joi.string().required()
    })
}