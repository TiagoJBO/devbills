import { StatusCodes } from "http-status-codes";

export class appError extends Error {
    public statusCode: StatusCodes;

    constructor(message: string, statusCode: StatusCodes) {
        super(message)



        this.statusCode = statusCode
    }
}