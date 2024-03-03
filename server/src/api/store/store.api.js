import { ApiPath } from '../../libs/enums/enums.js';

const initStore = (Router, services) => {
  const router = Router();

  router.get(ApiPath.ROOT, async (req, res, next) => {});

  return router;
};

export { initStore };
