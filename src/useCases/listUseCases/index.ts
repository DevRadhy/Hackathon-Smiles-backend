import WishListController from "../../controllers/WishListController";
import ItemRepository from "../../database/repositories/itemRepository";
import { CreateListUseCase } from "./createListUseCase";

const itemRepository = new ItemRepository();

const createListUseCase = new CreateListUseCase(
  itemRepository,
);

const wishlistController = new WishListController(
  createListUseCase,
)

export { wishlistController };