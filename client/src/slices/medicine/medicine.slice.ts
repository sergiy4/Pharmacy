import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { type Medicine } from '../../packages/medicine/medicine';
import { getMedicines, updateFavoriteMedicine } from './actions';
import { RootState } from '../../libs/packages/store/store';

type State = {
  medicines: Medicine[];
};

const initialState: State = {
  medicines: [],
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'medicines',
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      isAnyOf(getMedicines.fulfilled, updateFavoriteMedicine.fulfilled),
      (state, action) => {
        const { medicines } = action.payload;

        if (medicines) {
          state.medicines = medicines;
        }
      }
    );
  },
});

const getMedicinesState = (state: RootState) => state.medicines.medicines;

export { reducer, actions, name, getMedicinesState };
