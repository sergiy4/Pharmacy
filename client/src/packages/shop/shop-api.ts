import { ApiPath, HttpMethod } from '../../libs/enums/enums';
import { type GetShopsDtoResponse } from '../../libs/types/shop/types';
import { type HttpApi } from '../http/http';
import { type ShopApi } from './libs/types/types';

type Constructor = {
  apiPath: string;
  httpApi: HttpApi;
};

class Shop implements ShopApi {
  #apiPath: string;

  #httpApi: HttpApi;

  public constructor({ apiPath, httpApi }: Constructor) {
    this.#apiPath = apiPath;
    this.#httpApi = httpApi;
  }

  public getStores(): Promise<GetShopsDtoResponse> {
    return this.#httpApi.load(`${this.#apiPath}${ApiPath.STORE}`, {
      method: HttpMethod.GET,
    });
  }
}

export { Shop };
