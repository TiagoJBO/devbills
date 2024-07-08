import { CreateCategoriyDTO } from "../../dtos/categories.tdo"
import { Transaction } from "../../entities/transactions.entity"
import { TransactionModel } from "../schemas/transactions.schema"

export class TransationsRepository {

    constructor(private model: typeof TransactionModel) { }


    async create({ title, date, amount, type, category }: Transaction): Promise<Transaction> {
        const createTransaction = await this.model.create({ title, date, amount, type, category })

        return createTransaction.toObject<Transaction>()
    }


    async index(): Promise<Transaction[]> {
        const transactions = await this.model.find()

        const transactionsMap = transactions.map((item) => item.toObject<Transaction>())

        return transactionsMap
    }
}

