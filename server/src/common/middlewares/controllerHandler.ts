import { NextFunction, Request, Response } from "express";
import { ValidationSchema } from "../types";
import { joiValidation } from "./joiValidation";
import { UnProcessibleError } from "../errors/unProcessibleError";
import HTTP from "../constants/http";


type AnyFunction = (...args: any[]) => any;

type ExpressCallBackFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>

const parseControllerArgs = (req: Request) => {
    return {
        body: req.body,
        files: req.file,
        params: req.params,
        query: req.query
    }
}


export const controllerHandler = (controllerFunction: AnyFunction, schema: ValidationSchema | undefined = {}): ExpressCallBackFunction => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const controllerArgs = parseControllerArgs(req);
        const { body, params, query } = controllerArgs;

        try{

            try{

                if(schema) {
                    const { bodySchema, paramSchema, querySchema } = schema;
    
                    if(bodySchema)
                        joiValidation(bodySchema, body);
                    if(paramSchema)
                        joiValidation(paramSchema, params)
                    if(querySchema)
                        joiValidation(querySchema, query);
                }
            }catch(err: any) {
                throw new UnProcessibleError(err.message);
            }

            const controllerResult = controllerFunction(controllerArgs);
            if(!controllerResult) {
                res.status(HTTP.OK).send({ status: "success" });
                return;
            }

            const { code,  ...data } = controllerResult;
            res.status(code ?? 200).json(data);

        }catch(err: any) {
            next(err);
        }
    }
}