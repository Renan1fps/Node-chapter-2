import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'


const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/categories", (request, response)=>{
  const { name, description } = request.body

  categoriesRepository.create({ name, description })
  return response.status(201).send()
})

categoriesRoutes.get("/categories", (request, response)=>{
  const getAllCategories = categoriesRepository.getAllCategories()
  return response.status(200).json(getAllCategories)
})

export { categoriesRoutes }