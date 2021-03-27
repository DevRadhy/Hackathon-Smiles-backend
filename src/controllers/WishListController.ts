import { Request, Response } from "express";
import { CreateListUseCase } from "../useCases/listUseCases/createListUseCase";

export default class WishListController {
  constructor (
    private createListUseCase: CreateListUseCase,
  ){}

  async createTravel(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      from,
      to,
      objective
    } = request.body;

    try {
      const travel = await this.createListUseCase.createTravel({
        name,
        description,
        from,
        to,
        objective,
      });

      return response.json(travel);
    }catch(err) {
      return response.status(400).json({
        error: err.message || 'Unexpected error'
      });
    }
  }

  async createProduct(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      product,
      objective
    } = request.body;

    try {
      const productInfo = await this.createListUseCase.createProduct({
        name,
        description,
        product,
        objective,
      });

      return response.json(productInfo);
    }catch(err) {
      return response.status(400).json({
        error: err.message || 'Unexpected error'
      });
    }
  }
}