import { createSlice } from '@reduxjs/toolkit';

import { type OrderItem } from '../../libs/types/types';
import { createOrder } from './actions';

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

export { reducer, actions, name };
