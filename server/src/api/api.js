import { AppRoute } from '../libs/enums/enums.js';
import { initMedicine } from './medicines/medicines.api.js';
import { initStore } from './store/store.api.js';

const initApi = (Router) => {
  const apiRouter = Router();

  apiRouter.use(AppRoute.MEDICINES, initMedicine(Router, {}));

  apiRouter.use(AppRoute.STORES, initStore(Router, {}));

  return apiRouter;
};

export { initApi };
