import Joi from "joi";
import { ValidationSchema } from "../types";

//TODO: this is still in progress.

export const signInSchema: ValidationSchema = {
    bodySchema: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required()
    })
}