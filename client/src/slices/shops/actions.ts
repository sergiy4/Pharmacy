import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Shop, type AsyncThunkConfig } from '../../libs/types/types';
import { ActionType } from './common';

const getShops = createAsyncThunk<
  Record<'shops', Shop[]>,
  undefined,
  AsyncThunkConfig
>(ActionType.GET_SHOPS, async (_request, { extra: { shopApi } }) => {
  const loadShops = await shopApi.getShops();

  return { shops: loadShops.shops };
});

export { getShops };
