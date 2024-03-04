import { ApiPath } from '../../libs/enums/enums.js';

const initOrder = (Router, services) => {
  const { orderService } = services;
  const router = Router();

  router
    .get(ApiPath.ROOT, async (req, res, next) => {
      try {
        const email = req.body?.email;
        const orders = await orderService.getOrdersByEmail(email);

        return res.send({
          orders,
        });
      } catch (err) {
        next(err);
      }
    })
    .post(ApiPath.ROOT, async (req, res, next) => {
      try {
        const orders = await orderService.createOrder(req.body);

        console.log(orders);
        return res.send({
          orders,
        });
      } catch (err) {
        next(err);
      }
    });

  return router;
};

export { initOrder };
