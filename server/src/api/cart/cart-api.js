import { ApiPath } from '../../libs/enums/enums.js';

const initCart = (Router, services) => {
  const { medicineService } = services;
  const router = Router();

  router.get(ApiPath.ROOT, async (req, res, next) => {
    try {
      const IDs = req.query?.IDs?.split(',').map((num) => {
        return parseInt(num, 10);
      });

      const cartItems = await medicineService.getCartItems(IDs);

      return res.send({
        cartItems,
      });
    } catch (err) {
      next(err);
    }
  });

  return router;
};

export { initCart };
