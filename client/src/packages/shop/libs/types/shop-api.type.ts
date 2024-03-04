import { type GetShopsDtoResponse } from '../../../../libs/types/shop/types';

type ShopApi = {
  getShops(): Promise<GetShopsDtoResponse>;
};

export { type ShopApi };
