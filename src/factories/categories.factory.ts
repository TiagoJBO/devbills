// #- Forma de fisntancia unica da aplicação//

import { CategoriesRepository } from "../database/reposiories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoriesService } from "../services/categories.services";

export class CategoriesFacatory {
    private static CategoriesService: CategoriesService

    static getServiceInstance() {
        if (this.CategoriesService) {
            return this.CategoriesService
        }

        const Repository = new CategoriesRepository(CategoryModel)
        const service = new CategoriesService(Repository)

        this.CategoriesService = service

        return service

    }

}