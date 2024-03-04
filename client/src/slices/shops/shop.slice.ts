import { createSlice } from '@reduxjs/toolkit';
import { type Shop } from '../../libs/types/types';
import { getShops } from './actions';

type State = {
  shops: Shop[];
};

const initialState: State = {
  shops: [],
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'shops',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getShops.fulfilled, (state, actions) => {
      const { shops } = actions.payload;

      state.shops = shops;
    });
  },
});

export { reducer, actions, name };
