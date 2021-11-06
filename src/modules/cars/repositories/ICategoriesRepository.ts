import { Category } from "../Entities/Category";

interface ICreateCategoryDTO{
  name: string
  description: string
}

interface ICategoriesRepository{
  findByName(name: string): Promise<Category | undefined>,
  getAllCategories(): Promise<Category[]>,
  create({ name, description }:ICreateCategoryDTO ): Promise<void>
  delete(name: string): Promise<void>
}

export { ICreateCategoryDTO, ICategoriesRepository }