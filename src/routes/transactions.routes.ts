import { Router } from "express"
import { createTransactionsSchema, getDashboardSchema, indexTransactionSchema } from "../dtos/transactions.dto"
import { ParamsType, validator } from "../middleware/validator.middleware"
import { TransactionsController } from "../controllers/transaction.controlle"
import { transactionsFactory } from "../factories/transactions.factory"


export const transactionRoutes = Router()

const controller = new TransactionsController(transactionsFactory.getServiceInstance())



transactionRoutes.post('/', validator({
    schema: createTransactionsSchema,
    type: ParamsType.BODY

}), controller.create)


transactionRoutes.get('/', validator({
    schema: indexTransactionSchema,
    type: ParamsType.BODY
}), controller.index)

transactionRoutes.get('/dashboard', validator({
    schema: getDashboardSchema,
    type: ParamsType.QUERY
}), controller.getDashboard)
