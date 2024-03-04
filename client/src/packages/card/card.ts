import {
  type CardItem,
  type GetCardItemsRequestDto,
  type GetMedicineDtoResponse,
} from '../../libs/types/types';
import { ENV } from '../../libs/enums/enums';
import { httpApi } from '../http/http';
import { Card as CardApi } from './card-api';

const cardApi = new CardApi({
  httpApi,
  apiPath: ENV.API_PATH,
});

export { cardApi };
export {
  type GetCardItemsRequestDto,
  type CardItem,
  type GetMedicineDtoResponse,
};
export { type CardApi } from './libs/types/types';
