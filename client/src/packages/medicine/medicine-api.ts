import { ApiPath, HttpMethod } from '../../libs/enums/enums';
import { type HttpApi } from '../http/http';
import {
  type MedicineApi,
  type PatchMedicineDtoResponse,
  type GetMedicineDtoRequest,
  type GetMedicineDtoResponse,
} from './libs/types/types';

type Constructor = {
  apiPath: string;
  httpApi: HttpApi;
};

class Medicine implements MedicineApi {
  #apiPath: string;

  #httpApi: HttpApi;

  public constructor({ apiPath, httpApi }: Constructor) {
    this.#apiPath = apiPath;
    this.#httpApi = httpApi;
  }

  public getMedicines(
    payload: GetMedicineDtoRequest
  ): Promise<GetMedicineDtoResponse> {
    return this.#httpApi.load(`${this.#apiPath}${ApiPath.MEDICINES}`, {
      method: HttpMethod.GET,
      query: payload,
    });
  }

  public updateFavoriteMedicine(id: number): Promise<PatchMedicineDtoResponse> {
    return this.#httpApi.load(`${this.#apiPath}${ApiPath.MEDICINES}/${id}`, {
      method: HttpMethod.PATCH,
    });
  }
}

export { Medicine };
