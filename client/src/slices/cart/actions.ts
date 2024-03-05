import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  type CartItem,
  type AsyncThunkConfig,
  type GetCartItemsRequestDto,
} from '../../libs/types/types';
import { ActionType } from './common';

const getCartItems = createAsyncThunk<
  Record<'medicines', CartItem[]>,
  GetCartItemsRequestDto,
  AsyncThunkConfig
>(
  ActionType.GET_CART_ITEMS,
  async (payload, { getState, extra: { cartApi } }) => {
    const { cardItems } = await cartApi.getCartItems(payload);

    const {
      cart: { cart },
    } = getState();

    const updatedMedicine = cardItems.map((item) => {
      const existingItemIndex = cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const existingItem = cart[existingItemIndex];
        return {
          ...item,
          quantity: existingItem.quantity,
        };
      }

      return {
        ...item,
        quantity: 1,
      };
    });

    return { medicines: updatedMedicine };
  }
);

export { getCartItems };
