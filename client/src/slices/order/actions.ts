import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  type AsyncThunkConfig,
  type CreateOrderRequestDto,
  type OrderItem,
} from '../../libs/types/types';
import { ActionType } from './common';

const createOrder = createAsyncThunk<
  Record<'order', OrderItem>,
  CreateOrderRequestDto,
  AsyncThunkConfig
>(ActionType.CREATE_ORDERS, async (payload, { extra: { orderApi } }) => {
  const createdOrder = await orderApi.createOrder(payload);

  return { order: createdOrder };
});

export { createOrder };
