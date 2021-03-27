import { createProduct, createTravel } from "../../lib/createItem";
import Wishlist from "../../models/Wishlist";
import { CreateProductProps, CreateTravelProps } from "./listDTO";

export class CreateListUseCase {
  async createTravel(data: CreateTravelProps) {
    const createItem = new Wishlist(data);

    const travel = await createTravel(data.to);

    return {
      id: createItem.id,
      travel
    };
  }

  async createProduct(data: CreateProductProps) {
    const createItem = new Wishlist(data);

    const product = await createProduct(data.product);

    return {
      id: createItem.id,
      product
    };
  }
}