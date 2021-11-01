import { Router } from 'express'
import { createCategoryController } from "../modules/cars/useCases/createCategory"
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
import multer from 'multer'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import { deleteCategoryController } from '../modules/cars/useCases/deleteCategory'

const upload = multer({
  dest:"./tmp"
})


const categoriesRoutes = Router()


categoriesRoutes.post("/categories", (request, response)=>{
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/categories", (request, response)=>{
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response)=>{
  return importCategoryController.handle(request, response)
})

categoriesRoutes.delete("/categories", (request, response)=>{
  return deleteCategoryController.handle(request, response)
})

export { categoriesRoutes }