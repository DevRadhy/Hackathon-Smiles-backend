import ItemRepository from "../../database/repositories/itemRepository";
import { CreateProduct, CreateTravel } from "../../lib/createItem";
import Wishlist, { Product, Travel } from "../../models/Wishlist";
import { CreateProductProps, CreateTravelProps } from "./listDTO";

export class CreateListUseCase {
  constructor (
    private itemRepository: ItemRepository,
  ){}

  async createTravel(data: CreateTravelProps) {
    const createItem = new Wishlist({
      name: data.name,
      description: data.description,
      objective: data.objective
    });

    const createTravel = new Travel({
      from: data.from,
      to: data.to,
      item_id: createItem.id
    });

    const travel = await CreateTravel(createTravel.to);

    if(!travel) {
      throw new Error('Pacote de viagem não encontrado.');
    }

    const saveItem = await this.itemRepository.saveTravel(createItem, createTravel);

    return {
      id: saveItem.id,
      item: travel,
    };
  }

  async createProduct(data: CreateProductProps) {
    const createItem = new Wishlist({
      name: data.name,
      description: data.description,
      objective: data.objective,
    });

    const createProduct = new Product({
      product: data.product,
      item_id: createItem.id,
    });

    const product = await CreateProduct(createProduct.product);

    if(!product) {
      throw new Error('Produto não encontrado.');
    }

    const saveItem = await this.itemRepository.saveProduct(createItem, createProduct);

    return {
      id: saveItem.id,
      item: product,
    };
  }
}