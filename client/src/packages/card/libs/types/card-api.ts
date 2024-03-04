import {
  type GetMedicineDtoResponse,
  type GetCardItemsRequestDto,
} from '../../../../libs/types/types';

type CardApi = {
  getCardItems(
    payload: GetCardItemsRequestDto
  ): Promise<GetMedicineDtoResponse>;
};

export { type CardApi };
