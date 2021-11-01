import fs from 'fs'
import csvParse from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { response } from 'express'

interface IImportCategory{
  name: string
  description: string
}
class ImportCategoryUseCase{

  constructor(private categoryRepository: ICategoriesRepository){}

  loadImport(file: Express.Multer.File): Promise<IImportCategory[]>{
    return new Promise((resolve, reject)=>{
      const stream = fs.createReadStream(file.path)
      const category: IImportCategory[] = []
      const parseFile = csvParse()
      stream.pipe(parseFile)
      parseFile.on("data", async (file)=>{
        const [name, description] = file
        category.push({ name, description })
    }).on("end", ()=> {
      resolve(category)
    }).on("error", (err)=>{
      reject(err)
    })
    })
  }

  async execute(file: Express.Multer.File ): Promise<void>{
    const categories = await this.loadImport(file)
  }
}

export {ImportCategoryUseCase }