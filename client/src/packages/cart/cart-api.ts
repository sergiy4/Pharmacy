import { ApiPath, HttpMethod } from '../../libs/enums/enums';
import {
  type GetCartItemsRequestDto,
  type GetMedicineDtoResponse,
} from '../../libs/types/types';
import { type HttpApi } from '../http/http';
import { type CartApi } from './libs/types/types';

type Constructor = {
  apiPath: string;
  httpApi: HttpApi;
};

class Cart implements CartApi {
  #apiPath: string;

  #httpApi: HttpApi;

  public constructor({ apiPath, httpApi }: Constructor) {
    this.#apiPath = apiPath;
    this.#httpApi = httpApi;
  }

  public getCartItems(
    payload: GetCartItemsRequestDto
  ): Promise<GetMedicineDtoResponse> {
    return this.#httpApi.load(`${this.#apiPath}${ApiPath.CART}`, {
      method: HttpMethod.GET,
      query: payload,
    });
  }
}

export { Cart };
