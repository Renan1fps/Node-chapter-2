import { Category } from "../Entities/Category";

interface ICreateCategoryDTO{
  name: string
  description: string
}

interface ICategoriesRepository{
  findByName(name: string): Category | undefined,
  getAllCategories(): Category[],
  create({ name, description }:ICreateCategoryDTO ): void
  delete(name: string): void
}

export { ICreateCategoryDTO, ICategoriesRepository }