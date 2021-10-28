import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from "../modules/cars/useCases/createCategory"


const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/categories", (request, response)=>{
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/categories", (request, response)=>{
  const getAllCategories = categoriesRepository.getAllCategories()
  return response.status(200).json(getAllCategories)
})

export { categoriesRoutes }