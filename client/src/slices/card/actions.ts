import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  type CardItem,
  type AsyncThunkConfig,
  type GetCardItemsRequestDto,
} from '../../libs/types/types';
import { ActionType } from './common';

const getCardItems = createAsyncThunk<
  Record<'medicines', CardItem[]>,
  GetCardItemsRequestDto,
  AsyncThunkConfig
>(ActionType.GET_CARD_ITEMS, async (payload, { extra: { cardApi } }) => {
  const loadMedicines = await cardApi.getCardItems(payload);

  const updatedMedicine = loadMedicines.medicines.map((item) => ({
    ...item,
    quantity: 1,
  }));

  return { medicines: updatedMedicine };
});

export { getCardItems };
