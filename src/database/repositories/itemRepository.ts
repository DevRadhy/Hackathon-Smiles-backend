import { getRepository } from "typeorm";
import Wishlist, { Product, Travel } from "../../models/Wishlist";

export default class ItemRepository {
  async saveTravel(item: Wishlist, data: Travel) {
    const itemRepository = getRepository(Wishlist);
    const travelsRepository = getRepository(Travel);
    
    const saveItem = await itemRepository.save(item);
    const saveTravels = await travelsRepository.save(data);

    return {
      id: saveItem.id,
      item: saveTravels,
    };
  }

  async saveProduct(item: Wishlist, data: Product) {
    const itemRepository = getRepository(Wishlist);
    const productRepository = getRepository(Product);
    
    const saveItem = await itemRepository.save(item);
    const saveProduct = await productRepository.save(data);

    return {
      id: saveItem.id,
      item: saveProduct,
    };
  }
}