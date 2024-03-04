import {
  type GetMedicineDtoResponse,
  type GetCartItemsRequestDto,
} from '../../../../libs/types/types';

type CartApi = {
  getCartItems(
    payload: GetCartItemsRequestDto
  ): Promise<GetMedicineDtoResponse>;
};

export { type CartApi };
