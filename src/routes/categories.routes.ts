import { Router } from 'express'
import { Category } from '../model/Category'

const categoriesRoutes = Router()

const categories: Category[] = []

categoriesRoutes.post("/categories", (request, response)=>{
  const { name, description } = request.body

  const category = new Category(name, description, )
  categories.push(category)
  return response.status(201).json(category)
})

export { categoriesRoutes }