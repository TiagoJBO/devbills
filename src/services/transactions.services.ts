import { StatusCodes } from "http-status-codes";
import { CategoriesRepository } from "../database/reposiories/categories.repository";
import { TransationsRepository } from "../database/reposiories/transactions.repository";
import { CreateTransactionDTO } from "../dtos/transacti0onsd.dto";
import { AppError } from "../errors/app.error";
import { Transaction } from "../entities/transactions.entity";

export class transactionsService {
    constructor(
        private TransationsRepository: TransationsRepository,
        private CategoryReposytery: CategoriesRepository
    ) { }

    async create({ title, type, date, categoryId, amount }: CreateTransactionDTO): Promise<Transaction> {

        const category = await this.CategoryReposytery.findById(categoryId)
        if (!category) {
            throw new AppError('Category does not  exist.', StatusCodes.NOT_FOUND)
        }

        const transaction = new Transaction({
            title,
            type,
            date,
            category,
            amount,
        })

        const createTransaction = await this.TransationsRepository.create(transaction)


        return createTransaction

    }

}