import { CategoriesRepository } from "../database/reposiories/categories.repository"
import { TransationsRepository } from "../database/reposiories/transactions.repository"
import { CategoryModel } from "../database/schemas/category.schema"
import { TransactionModel } from "../database/schemas/transactions.schema"
import { TransactionsService } from "../services/transactions.services"


export class transactionsFactory {
    private static transactionsService: TransactionsService

    static getServiceInstance() {
        if (this.transactionsService) {
            return this.transactionsService
        }

        const repository = new TransationsRepository(TransactionModel)
        const categoriesRepository = new CategoriesRepository(CategoryModel)
        const service = new TransactionsService(repository, categoriesRepository)

        this.transactionsService = service

        return service

    }

}