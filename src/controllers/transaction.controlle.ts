import { NextFunction, Request, Response, response } from "express"
import { CreateTransactionDTO, getDashboardDTO, IndexTransactionsDTO } from "../dtos/transactions.dto"
import { TransactionsService } from "../services/transactions.services"
import { StatusCodes } from "http-status-codes"

export class TransactionsController {


    constructor(private transactionsService: TransactionsService) { }

    create = async (req: Request<unknown, unknown, CreateTransactionDTO>, res: Response, next: NextFunction,) => {
        try {

            const { title, amount, categoryId, date, type } = req.body;


            const result = await this.transactionsService.create({ title, amount, categoryId, date, type })


            return res.status(StatusCodes.CREATED).json(result)
        } catch (err) {
            next(err)
        }
    }

    index = async (req: Request<unknown, unknown, unknown, IndexTransactionsDTO>, res: Response, next: NextFunction,) => {
        try {
            const { title, categoryId, beginDate, endDate } = req.query
            const result = await this.transactionsService.index({
                title,
                categoryId,
                beginDate,
                endDate,
            })


            return res.status(StatusCodes.OK).json(result)
        } catch (err) {
            next(err)
        }
    }


    getDashboard = async (req: Request<unknown, unknown, unknown, getDashboardDTO>, res: Response, next: NextFunction,) => {
        try {
            const { beginDate, endDate } = req.query
            const result = await this.transactionsService.getDashboard({

                beginDate,
                endDate,
            })


            return res.status(StatusCodes.OK).json(result)
        } catch (err) {
            next(err)
        }
    }
}