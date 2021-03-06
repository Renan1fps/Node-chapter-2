import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateCategoryController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationRepository = new SpecificationRepository()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationUseController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationUseController }