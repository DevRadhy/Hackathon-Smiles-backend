import { CreateProduct, CreateTravel } from "../../lib/createItem";
import Wishlist, { Product, Travel } from "../../models/Wishlist";
import { CreateProductProps, CreateTravelProps } from "./listDTO";

export class CreateListUseCase {
  async createTravel(data: CreateTravelProps) {
    const createItem = new Wishlist({
      name: data.name,
      description: data.description,
      objective: data.objective
    });

    const createTravel = new Travel({
      from: data.from,
      to: data.to,
    });

    const travel = await CreateTravel(createTravel.to);

    return {
      id: createItem.id,
      travel
    };
  }

  async createProduct(data: CreateProductProps) {
    const createItem = new Wishlist({
      name: data.name,
      description: data.description,
      objective: data.objective,
    });

    const createProduct = new Product({
      product: data.product
    });

    const product = await CreateProduct(createProduct.product);

    return {
      id: createItem.id,
      product
    };
  }
}