import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "./deleteCatoryUseCase";


class DeleteCategoryController{

  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase){}

  handle(request: Request, response: Response){
    const { name } = request.body
    this.deleteCategoryUseCase.execute(name)

    return response.status(200).send()
  }
}

export { DeleteCategoryController }