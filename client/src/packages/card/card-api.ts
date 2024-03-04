import { ApiPath, HttpMethod } from '../../libs/enums/enums';
import {
  type GetCardItemsRequestDto,
  type GetMedicineDtoResponse,
} from '../../libs/types/types';
import { type HttpApi } from '../http/http';
import { type CardApi } from './libs/types/types';

type Constructor = {
  apiPath: string;
  httpApi: HttpApi;
};

class Card implements CardApi {
  #apiPath: string;

  #httpApi: HttpApi;

  public constructor({ apiPath, httpApi }: Constructor) {
    this.#apiPath = apiPath;
    this.#httpApi = httpApi;
  }

  public getCardItems(
    payload: GetCardItemsRequestDto
  ): Promise<GetMedicineDtoResponse> {
    return this.#httpApi.load(`${this.#apiPath}${ApiPath.CARD}`, {
      method: HttpMethod.GET,
      payload: JSON.stringify(payload),
    });
  }
}

export { Card };
