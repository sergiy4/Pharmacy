import { ApiPath } from '../../libs/enums/enums.js';

const initMedicine = (Router, services) => {
  const router = Router();

  router.get(ApiPath.ROOT, async (req, res, next) => {
    res.send(400);
  });

  return router;
};

export { initMedicine };
