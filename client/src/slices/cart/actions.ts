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
>(ActionType.GET_CART_ITEMS, async (payload, { extra: { cartApi } }) => {
  const loadMedicines = await cartApi.getCartItems(payload);

  const updatedMedicine = loadMedicines.medicines.map((item) => ({
    ...item,
    quantity: 1,
  }));

  return { medicines: updatedMedicine };
});

export { getCartItems };
