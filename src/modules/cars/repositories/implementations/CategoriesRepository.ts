import { getRepository, Repository } from 'typeorm'
import { Category } from '../../Entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository{

  private repository: Repository<Category>

  private static INSTANCE : CategoriesRepository

  private constructor(){
    this.repository = getRepository(Category)
  }

  public static getInstance(): CategoriesRepository{
    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }

  async delete(name: string): Promise<void> {
    const index = await this.repository.delete({ name })
  }

  async create({name, description}: ICreateCategoryDTO): Promise<void>{
    const category = await this.repository.create({ name, description })
    this.repository.save(category)
  }

  async getAllCategories(): Promise<Category[]>{
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category | undefined>{
    const category = await this.repository.findOne({ name })
    return category
  }
}

export { CategoriesRepository }