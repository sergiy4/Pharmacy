import { User } from './user.type';

type OrderItemRequest = {
  medicine_Id: number;
  quantity: number;
};

type CreateOrderRequestDto = {
  user: User;
  order_items: OrderItemRequest[];
};

export { type CreateOrderRequestDto };
