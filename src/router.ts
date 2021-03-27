import { Router } from 'express';
import { wishlistController } from './useCases/listUseCases';

const router = Router();

router.post('/create-travel', (request, response) => {
  return wishlistController.createTravel(request, response);
});

export default router;