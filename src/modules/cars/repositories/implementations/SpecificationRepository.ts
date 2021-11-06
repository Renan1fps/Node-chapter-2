import { Specification } from "../../Entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

  class SpecificationRepository implements ISpecificationRepository{

    private specifications: Specification[]

    constructor(){
      this.specifications = []
    }
    findByName(name: string): Specification | undefined {
      const specification = this.specifications.find(specification => specification.name === name)
      return specification
    }

    create({ name, description }: ICreateSpecificationDTO): void {
      const specification = new Specification(name, description)
      this.specifications.push(specification)
    }

  }

  export { SpecificationRepository }