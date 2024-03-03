import { ENV } from '../../libs/enums/enums';
import { httpApi } from '../http/http';
import { Medicine as MedicineApi } from './medicine-api';

const medicineApi = new MedicineApi({
  httpApi,
  apiPath: ENV.API_PATH,
});

export { medicineApi };

export {
  type GetMedicineDtoRequest,
  type GetMedicineDtoResponse,
  type Medicine,
  type MedicineApi,
  type PatchMedicineDtoResponse,
} from './libs/types/types';
