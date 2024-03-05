import { createSlice } from '@reduxjs/toolkit';
import { type CartItem } from '../../libs/types/types';
import { getCartItems } from './actions';
import { RootState } from '../../libs/packages/store/store';

type State = {
  cart: CartItem[];
  IDs: number[];
};

const initialState: State = {
  cart: [],
  IDs: [],
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart: (state, action) => {
      if (!state.IDs.includes(action.payload)) {
        state.IDs = [...state.IDs, action.payload];
      }
    },
    deleteItemFromCart: (state, action) => {
      state.IDs = state.IDs.filter((id) => id !== action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
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

const getCartIDsState = (state: RootState) => state.cart.IDs;
const getCartsState = (state: RootState) => state.cart.cart;
const getAllCartState = (state: RootState) => state.cart;

export {
  reducer,
  actions,
  name,
  getCartIDsState,
  getCartsState,
  getAllCartState,
};
