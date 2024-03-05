import { AppRoute } from '../libs/enums/enums.js';
import { initMedicine } from './medicines/medicines.api.js';
import { initShop } from './shop/shop.api.js';
import { initOrder } from './order/order.api.js';
import { initCart } from './cart/cart-api.js';
import {
  medicineService,
  shopService,
  orderService,
} from '../services/index.js';

const initApi = (Router) => {
  const apiRouter = Router();

  apiRouter.use(AppRoute.MEDICINES, initMedicine(Router, { medicineService }));

  apiRouter.use(AppRoute.SHOPS, initShop(Router, { shopService }));

  apiRouter.use(AppRoute.ORDERS, initOrder(Router, { orderService }));

  apiRouter.use(AppRoute.CART, initCart(Router, { medicineService }));

  return apiRouter;
};

export { initApi };
