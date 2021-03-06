import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoryUseCase";


const categoryRepository = CategoriesRepository.getInstance()
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export { listCategoriesController }

//exportação tem que ser default para conectar no banco
