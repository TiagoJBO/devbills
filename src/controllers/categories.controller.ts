import { NextFunction, Request, Response } from "express";
import { z } from 'zod'

import { CategoriesService } from "../services/categories.services";
import { CategoriesRepository } from "../database/reposiories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CreateCategoriyDTO } from "../dtos/categories.tdo";
import { StatusCodes } from "http-status-codes";

export class CategoriesController {
    async create(req: Request<unknown, unknown, CreateCategoriyDTO>, res: Response, next: NextFunction,) {
        try {

            const { color, title } = req.body


            const respository = new CategoriesRepository(CategoryModel)
            const service = new CategoriesService(respository);

            const result = await service.create({ color, title })
            const result = await service.create({ color, title })



            return res.status(StatusCodes.CREATED).json(result)
        } catch (err) {
            next(err)
        }


    }
}