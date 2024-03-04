import { AppRoute } from '../libs/enums/enums.js';
import { initMedicine } from './medicines/medicines.api.js';
import { initShop } from './shop/shop.api.js';
import { medicineService, shopService } from '../services/index.js';

const initApi = (Router) => {
  const apiRouter = Router();

  apiRouter.use(AppRoute.MEDICINES, initMedicine(Router, { medicineService }));

  apiRouter.use(AppRoute.SHOPS, initShop(Router, { shopService }));

  return apiRouter;
};

export { initApi };
