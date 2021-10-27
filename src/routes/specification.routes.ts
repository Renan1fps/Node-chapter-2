import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'
import { SpecificationService } from '../modules/cars/services/SpecificationService'

const specificationRoutes = Router()
const specificationRepository = new SpecificationRepository()

specificationRoutes.post("/specification", (request, response)=>{
  const { name, description } = request.body

  const createCategoryService = new SpecificationService(specificationRepository)
  createCategoryService.execute({ name, description })
  return response.status(201).send()

})

export { specificationRoutes }