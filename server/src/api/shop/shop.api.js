import { ApiPath } from '../../libs/enums/enums.js';

const initShop = (Router, services) => {
  const { shopService } = services;
  const router = Router();

  router.get(ApiPath.ROOT, async (req, res, next) => {
    try {
      const shops = await shopService.getShops();

      return res.send({
        shops,
      });
    } catch (err) {
      next(err);
    }
  });

  return router;
};

export { initShop };
