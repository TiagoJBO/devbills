import { StatusCodes } from "http-status-codes";
import { CategoriesRepository } from "../database/reposiories/categories.repository";
import { CreateCategoriyDTO } from "../dtos/categories.tdo";
import { Category } from "../entities/category.entity";
import { AppError } from "../errors/app.error";

export class CategoriesService {
    constructor(private CategoriesRepository: CategoriesRepository) { }

    async create({ color, title }: CreateCategoriyDTO): Promise<Category> {
        const foundCategory = await this.CategoriesRepository.findByTitle(title)

        if (foundCategory) {
            throw new AppError('Category already exists.', StatusCodes.BAD_REQUEST)

        }
        const category = new Category({
            title,
            color,
        })

        const createdCategory = await this.CategoriesRepository.create(category)

        return createdCategory
    }
    async index(): Promise<Category[]> {
        const categories = await this.CategoriesRepository.index()

        return categories
    }
}