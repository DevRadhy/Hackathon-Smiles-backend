import { CreateTravel } from "../../lib/CreateTravel";
import Wishlist from "../../models/Wishlist";
import { CreateProductProps, CreateTravelProps } from "./listDTO";

export class CreateListUseCase {
  async createTravel(data: CreateTravelProps) {
    const createtravel = new Wishlist(data);

    const travel = await CreateTravel(data.to);

    return {
      id: createtravel.id,
      travel
    };
  }

  async createProduct(data: CreateProductProps) {
    return;
  }
}