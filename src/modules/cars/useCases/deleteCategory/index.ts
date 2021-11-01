import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { DeleteCategoryController } from "./deleteCategoryController";
import { DeleteCategoryUseCase } from "./deleteCatoryUseCase";

const categoryRepository = CategoriesRepository.getInstance()
const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository)
const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)

export { deleteCategoryController }
