import { ObjectSchema } from "joi";


export interface ValidationSchema {
    bodySchema?: ObjectSchema;
    paramSchema?: ObjectSchema;
    querySchema?: ObjectSchema;
}