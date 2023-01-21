import HTTP from "../constants/http";

export abstract class ApiError extends Error {

    abstract _statusCode: number;
    abstract _message: string;
    abstract _stack?: string | undefined;

    constructor(msg: string) {
        super(msg);
        this.name = this.constructor.name;
        
        Object.setPrototypeOf(this, ApiError.prototype);
    }

    abstract get statusCode(): number;
    abstract get message(): string;
}

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