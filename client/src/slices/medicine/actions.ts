import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import {
  type Medicine,
  type AsyncThunkConfig,
  type GetMedicineDtoRequest,
} from '../../libs/types/types';

const getMedicines = createAsyncThunk<
  Record<'medicines', Medicine[]>,
  GetMedicineDtoRequest,
  AsyncThunkConfig
>(ActionType.GET_MEDICINES, async (payload, { extra: { medicineApi } }) => {
  const loadMedicines = await medicineApi.getMedicines(payload);

  return { medicines: loadMedicines.medicines };
});

const updateFavoriteMedicine = createAsyncThunk<
  Record<'medicines', Medicine[]>,
  { id: number },
  AsyncThunkConfig
>(
  ActionType.GET_MEDICINES,
  async (payload, { getState, extra: { medicineApi } }) => {
    const { updatedMedicine } = await medicineApi.updateFavoriteMedicine(
      payload.id
    );

    const {
      medicines: { medicines },
    } = getState();

    const updated = medicines.map((item) =>
      item.id === updatedMedicine.id ? updatedMedicine : item
    );

    return { medicines: updated };
  }
);

export { getMedicines, updateFavoriteMedicine };
