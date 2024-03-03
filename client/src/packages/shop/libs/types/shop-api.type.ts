import { type GetShopsDtoResponse } from '../../../../libs/types/shop/types';

type ShopApi = {
  getStores(): Promise<GetShopsDtoResponse>;
};

export { type ShopApi };
