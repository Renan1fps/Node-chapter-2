import { Router } from 'express'
import { createSpecificationUseController } from '../modules/cars/useCases/createSpecification'

const specificationRoutes = Router()

specificationRoutes.post("/specification", (request, response)=>{
  return createSpecificationUseController.handle(request, response)
})

export { specificationRoutes }