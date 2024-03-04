import { createSlice } from '@reduxjs/toolkit';
import { type CardItem } from '../../libs/types/types';
import { getCardItems } from './actions';

type State = {
  card: CardItem[];
};

const initialState: State = {
  card: [],
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'card',
  reducers: {
    changeQuantity: (state, action) => {
      state.card = state.card.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
          return item;
        }
        return item;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(getCardItems.fulfilled, (state, action) => {
      const { medicines } = action.payload;
      state.card = medicines;
    });
  },
});

export { reducer, actions, name };
