import { getRepository } from "typeorm";
import Wishlist, { Product, Travel } from "../../models/Wishlist";

export default class ItemRepository {
  async saveTravel(item: Wishlist, data: Travel) {
    const itemRepository = getRepository(Wishlist);
    const travelsRepository = getRepository(Travel);
    
    const saveItem = await itemRepository.save(item);
    const saveTravel = await travelsRepository.save(data);

    if(!saveItem || !saveTravel) {
      throw new Error('Não foi possivel salvar o item.')
    }

    return {
      id: saveItem.id,
      item: saveTravel,
    };
  }

  async saveProduct(item: Wishlist, data: Product) {
    const itemRepository = getRepository(Wishlist);
    const productRepository = getRepository(Product);
    
    const saveItem = await itemRepository.save(item);
    const saveProduct = await productRepository.save(data);

    if(!saveItem || !saveProduct) {
      throw new Error('Não foi possivel salvar o item.')
    }

    return {
      id: saveItem.id,
      item: saveProduct,
    };
  }
}