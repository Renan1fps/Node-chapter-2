import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest{
  name: string,
  description: string
}

class CreateSpecificationUseCase{

  constructor(private specificationRepository: ISpecificationRepository){}

  create({ name, description }: IRequest){
     const specificationAlreadyExists = this.specificationRepository.findByName(name)

     if(specificationAlreadyExists){
       throw new Error("Specification Already exists")
     }
     this.specificationRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }