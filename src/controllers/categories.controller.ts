import { Request, Response } from "express";

import { CategoriesService } from "../services/categories.services";

export class CategoriesController {
    async create(_: Request, res: Response) {

        const services = new CategoriesService();

        const result = await services.create()



        return res.status(200).json(result)
    }
}