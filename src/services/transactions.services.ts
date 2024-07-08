import { StatusCodes } from "http-status-codes";
import { CategoriesRepository } from "../database/reposiories/categories.repository";
import { TransationsRepository } from "../database/reposiories/transactions.repository";
import { CreateTransactionDTO, getDashboardDTO, IndexTransactionsDTO } from "../dtos/transactions.dto";
import { AppError } from "../errors/app.error";
import { Transaction } from "../entities/transactions.entity";
import { Balance } from "../entities/balance.entity";

export class TransactionsService {
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

    async index(filters: IndexTransactionsDTO): Promise<Transaction[]> {
        const transactions = await this.TransationsRepository.index(filters)

        return transactions


    }
    getDashboard = async ({ beginDate, endDate }: getDashboardDTO) => {
        let balance = await this.TransationsRepository.getBalance({ beginDate, endDate })

        if (!balance) {
            balance = new Balance({
                _id: null,
                incomes: 0,
                expense: 0,
                balance: 0,
            })
        }
        
        return balance
    }

}