import { NextFunction, Request, Response } from "express";

import { CategoriesService } from "../services/categories.services";
import { CategoriesRepository } from "../database/reposiories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CreateCategoriyDTO } from "../dtos/categories.tdo";

export class CategoriesController {
    async create(req: Request<unknown, unknown, CreateCategoriyDTO>, res: Response, next: NextFunction,) {
        try {
            const { color, title } = req.body


            const respository = new CategoriesRepository(CategoryModel)
            const service = new CategoriesService(respository);

            const result = await service.create({ color, title })



            return res.status(201).json(result)
        } catch (err){
            next(err)
        }


    }
}