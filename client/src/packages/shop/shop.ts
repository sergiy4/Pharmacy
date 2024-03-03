import { type GetShopsDtoResponse, type Shop } from '../../libs/types/types';
import { ENV } from '../../libs/enums/enums';
import { httpApi } from '../http/http';
import { Shop as ShopApi } from './shop-api';

const shopApi = new ShopApi({
  httpApi,
  apiPath: ENV.API_PATH,
});

export { shopApi };
export { type GetShopsDtoResponse, type Shop };
export { type ShopApi } from './libs/types/types';
