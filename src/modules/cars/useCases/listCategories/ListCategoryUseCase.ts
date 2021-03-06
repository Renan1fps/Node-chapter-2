import { Category } from "../../Entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoriesUseCase{

  constructor(private categoriesRepository: ICategoriesRepository){}

  execute(): Category[]{
    const categories = this.categoriesRepository.getAllCategories()
    return categories
  }
}

export { ListCategoriesUseCase }