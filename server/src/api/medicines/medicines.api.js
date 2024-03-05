import { ApiPath } from '../../libs/enums/enums.js';

const initMedicine = (Router, services) => {
  const { medicineService } = services;
  const router = Router();

  router
    .get(ApiPath.ROOT, async (req, res, next) => {
      try {
        const shopId = req.query?.storeId;
        const medicines = await medicineService.getMedicines(shopId);

        return res.send({
          medicines,
        });
      } catch (err) {
        return next(err);
      }
    })
    .patch(ApiPath.ID, async (req, res, next) => {
      try {
        const { id } = req.params;
        const updatedMedicine = await medicineService.updateFavoriteMedicine(
          id
        );

        return res.send({
          updatedMedicine,
        });
      } catch (err) {
        return next(err);
      }
    });

  return router;
};

export { initMedicine };
