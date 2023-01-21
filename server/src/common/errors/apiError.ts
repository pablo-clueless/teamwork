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
