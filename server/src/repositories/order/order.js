import { TableName } from '../../libs/enums/enums.js';
import { Order as OrderRepository } from './order.repository.js';

const orderRepository = new OrderRepository({
  tableName: TableName.ORDER,
});

export { orderRepository };
