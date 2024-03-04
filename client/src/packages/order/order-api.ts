import { ApiPath, HttpMethod } from '../../libs/enums/enums';
import {
  CreateOrderRequestDto,
  GetOrdersRequestDto,
  OrderItem,
} from '../../libs/types/types';
import { type HttpApi } from '../http/http';
import { type OrderApi } from './libs/types/types';

type Constructor = {
  apiPath: string;
  httpApi: HttpApi;
};

class Order implements OrderApi {
  #apiPath: string;

  #httpApi: HttpApi;

  public constructor({ apiPath, httpApi }: Constructor) {
    this.#apiPath = apiPath;
    this.#httpApi = httpApi;
  }

  public createOrder(payload: CreateOrderRequestDto): Promise<OrderItem> {
    return this.#httpApi.load(`${this.#apiPath}${ApiPath.ORDERS}`, {
      method: HttpMethod.POST,
      payload: JSON.stringify(payload),
    });
  }

  public getOrdersByEmail(payload: GetOrdersRequestDto): Promise<OrderItem[]> {
    return this.#httpApi.load(`${this.#apiPath}${ApiPath.ORDERS}`, {
      method: HttpMethod.GET,
      payload: JSON.stringify(payload),
    });
  }
}

export { Order };
