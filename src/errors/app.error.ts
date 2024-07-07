import { StatusCodes } from "http-status-codes";
import { string } from "zod";

export class AppError {
    public statusCode: StatusCodes;
    public message: string | string[]

    constructor(message: string | string[], statusCode: StatusCodes) {
        this.message = message
        this.statusCode = statusCode
    }
}