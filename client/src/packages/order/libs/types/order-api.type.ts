import {
  type GetOrdersRequestDto,
  type CreateOrderRequestDto,
  type OrderItem,
} from '../../../../libs/types/types';

type OrderApi = {
  createOrder(payload: CreateOrderRequestDto): Promise<OrderItem>;
  getOrdersByEmail(payload: GetOrdersRequestDto): Promise<OrderItem[]>;
};

export { type OrderApi };
