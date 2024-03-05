import {
  orderItemRepository,
  orderRepository,
} from '../../repositories/index.js';
import { Order as OrderService } from './order.service.js';

const orderService = new OrderService({
  orderRepository,
  orderItemRepository,
});

export { orderService };
