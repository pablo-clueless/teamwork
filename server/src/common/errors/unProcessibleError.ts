import HTTP from "../constants/http";
import { ApiError } from "./apiError";


export class UnProcessibleError extends ApiError {

    _statusCode: number;
    _message: string;
    _stack?: string | undefined;

    constructor(msg: string) {
        super(msg);

        this._message = msg;
        this._statusCode = HTTP.UNPROCESSABLE_ENTITY;

        Object.setPrototypeOf(this, UnProcessibleError.prototype);
    }

    get statusCode(): number {
        return this._statusCode;
    }
    get message(): string {
        return this._message;
    }

}