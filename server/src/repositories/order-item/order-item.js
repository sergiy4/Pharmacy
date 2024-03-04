import { TableName } from '../../libs/enums/enums.js';
import { OrderItem as OrderItemRepository } from './order-item.repository.js';

const orderItemRepository = new OrderItemRepository({
  tableName: TableName.ORDER_ITEM,
});

export { orderItemRepository };
