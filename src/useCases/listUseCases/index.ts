import WishListController from "../../controllers/WishListController";
import { CreateListUseCase } from "./createListUseCase";

const createListUseCase = new CreateListUseCase;

const wishlistController = new WishListController(
  createListUseCase,
)

export { wishlistController };