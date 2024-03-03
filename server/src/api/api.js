import { AppRoute } from '../libs/enums/enums.js';
import { initMedicine } from './medicines/medicines.api.js';
import { initStore } from './store/store.api.js';
import { medicineService, storeService } from '../services/index.js';

const initApi = (Router) => {
  const apiRouter = Router();

  apiRouter.use(AppRoute.MEDICINES, initMedicine(Router, { medicineService }));

  apiRouter.use(AppRoute.STORES, initStore(Router, { storeService }));

  return apiRouter;
};

export { initApi };
