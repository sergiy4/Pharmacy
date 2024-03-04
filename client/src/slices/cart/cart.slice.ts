import { createSlice } from '@reduxjs/toolkit';
import { type CartItem } from '../../libs/types/types';
import { getCartItems } from './actions';

type State = {
  cart: CartItem[];
};

const initialState: State = {
  cart: [],
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    changeQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
          return item;
        }
        return item;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      const { medicines } = action.payload;
      state.cart = medicines;
    });
  },
});

export { reducer, actions, name };
