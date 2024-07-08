import { Router } from "express";
import { baseRoutes } from "./base.routes";
import { categoriesRoutes } from "./categories.routes";
import { transactionRoutes } from "./transactions.routes";

export const routes = Router()

routes.use('/', baseRoutes)
routes.use('/categories', categoriesRoutes)
routes.use('/transactions', transactionRoutes)