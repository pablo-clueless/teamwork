import { ObjectSchema } from "joi";
import { IncomingHttpHeaders } from "http";

export interface ControllerArgs {
    body: any;
    params: any;
    query: any;
    files:  any | null | undefined;
    headers: IncomingHttpHeaders,
}

export interface ValidationSchema {
    bodySchema?: ObjectSchema;
    paramSchema?: ObjectSchema;
    querySchema?: ObjectSchema;
}