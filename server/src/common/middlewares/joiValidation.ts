import { Schema } from "joi";


export const joiValidation = (schema: Schema, obj:any) => {
    const { value, error } = schema.validate(obj);
    if(error) throw error;
    return value;
}


