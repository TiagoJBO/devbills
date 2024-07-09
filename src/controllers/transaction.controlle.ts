import { NextFunction, Request, Response, response } from "express"
import { CreateTransactionDTO, GetDashboardDTO, GetFinacialEvolutionDTO, IndexTransactionsDTO } from "../dtos/transactions.dto"
import { TransactionsService } from "../services/transactions.services"
import { StatusCodes } from "http-status-codes"
import { BodyRequest, QueryRequest } from "./type"

export class TransactionsController {


    constructor(private transactionsService: TransactionsService) { }

    create = async (req: BodyRequest<CreateTransactionDTO>, res: Response, next: NextFunction,) => {
        try {

            const { title, amount, categoryId, date, type } = req.body;


            const result = await this.transactionsService.create({ title, amount, categoryId, date, type })


            return res.status(StatusCodes.CREATED).json(result)
        } catch (err) {
            next(err)
        }
    }

    index = async (req: QueryRequest<IndexTransactionsDTO>, res: Response, next: NextFunction,) => {
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


    getDashboard = async (req: QueryRequest<GetDashboardDTO>, res: Response, next: NextFunction,) => {
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
    getFinantialEvolution = async (req: QueryRequest<GetFinacialEvolutionDTO>, res: Response, next: NextFunction,) => {
        try {
            const { year } = req.query
            const result = await this.transactionsService.getFinanmcialEvolution({

                year
            })


            return res.status(StatusCodes.OK).json(result)
        } catch (err) {
            next(err)
        }
    }
}