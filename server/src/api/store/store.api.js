import { ApiPath } from '../../libs/enums/enums.js';

const initStore = (Router, services) => {
  const { storeService } = services;
  const router = Router();

  router.get(ApiPath.ROOT, async (req, res, next) => {
    try {
      const stores = await storeService.getStores();

      return res.send({
        stores,
      });
    } catch (err) {
      next(err);
    }
  });

  return router;
};

export { initStore };
