import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class DeleteCategoryUseCase{

  constructor(private categoryRepository: ICategoriesRepository){}

  execute(name: string){
    const existsCategory = this.categoryRepository.findByName(name) 
    if(!existsCategory){
      throw new Error("Category not found")
    }
    this.categoryRepository.delete(name)
  }
}

export { DeleteCategoryUseCase }