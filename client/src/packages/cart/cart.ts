import {
  type CartItem,
  type GetCartItemsRequestDto,
  type GetMedicineDtoResponse,
} from '../../libs/types/types';
import { ENV } from '../../libs/enums/enums';
import { httpApi } from '../http/http';
import { Cart as CartApi } from './cart-api';

const cartApi = new CartApi({
  httpApi,
  apiPath: ENV.API_PATH,
});

export { cartApi };
export {
  type GetCartItemsRequestDto,
  type CartItem,
  type GetMedicineDtoResponse,
};
export { type CartApi } from './libs/types/types';
