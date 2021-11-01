import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./importCategoryUseCase";


class ImportCategoryController{

  constructor(private importCategoryUseCase: ImportCategoryUseCase){}

  handle(request: Request, response: Response):Response{
    const { file } = request
    if(!file){
      throw new Error("Missing file")
    }
    this.importCategoryUseCase.execute(file)

    return response.status(201).send()
  }
}

export { ImportCategoryController }