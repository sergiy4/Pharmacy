import {
  type GetMedicineDtoRequest,
  type GetMedicineDtoResponse,
  type PatchMedicineDtoResponse,
} from './types';

type MedicineApi = {
  getMedicines(payload: GetMedicineDtoRequest): Promise<GetMedicineDtoResponse>;

  updateFavoriteMedicine(id: number): Promise<PatchMedicineDtoResponse>;
};

export { type MedicineApi };
