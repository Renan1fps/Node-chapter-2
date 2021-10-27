import { Category } from '../model/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository{

  private categories: Category[]

  constructor(){
    this.categories = []
  }

  create({name, description}: ICreateCategoryDTO): void{
    const category = new Category(name, description)
    this.categories.push(category)
  }

  getAllCategories(): Category[]{
    return this.categories
  }

  findByName(name: string): Category | undefined{
    const category = this.categories.find(category=> category.name === name )
    return category
  }
}

export { CategoriesRepository }