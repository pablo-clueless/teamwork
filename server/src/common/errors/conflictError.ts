import HTTP from "../constants/http";
import { ApiError } from "./apiError";

export class ConflictError extends ApiError {
    _statusCode: number;
    _message: string;
    _stack?: string | undefined;

    constructor(msg: string) {
        super(msg);

        this._message = msg;
        this._statusCode = HTTP.CONFLICT_ERROR;

        Object.setPrototypeOf(this, ConflictError.prototype);
    }

    get statusCode(): number {
        return this._statusCode;
    }
    get message(): string {
        return this._message;
    }
}