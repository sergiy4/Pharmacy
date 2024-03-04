import { ApiPath } from '../../libs/enums/enums.js';

const initCard = (Router, services) => {
  const { medicineService } = services;
  const router = Router();

  router.get(ApiPath.ROOT, async (req, res, next) => {
    try {
      const IDs = req.body?.IDs;

      const cardItems = await medicineService.getCardItems(IDs);

      return res.send({
        cardItems,
      });
    } catch (err) {
      next(err);
    }
  });

  return router;
};

export { initCard };
