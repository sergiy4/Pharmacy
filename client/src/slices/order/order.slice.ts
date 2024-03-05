import { createSlice } from '@reduxjs/toolkit';

import { type OrderItem } from '../../libs/types/types';
import { createOrder } from './actions';
import { RootState } from '../../libs/packages/store/store';

type State = {
  orders: OrderItem[];
};

const initialState: State = {
  orders: [],
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'orders',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      const { order } = action.payload;
      state.orders = [...state.orders, order];
    });
  },
});

const getOrderIDsState = (state: RootState) => state.orders.orders;

export { reducer, actions, name };
