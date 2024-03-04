import { ENV } from '../../libs/enums/enums';
import { httpApi } from '../http/http';
import { Order as OrderApi } from './order-api';

const orderApi = new OrderApi({
  httpApi,
  apiPath: ENV.API_PATH,
});

export { orderApi };
export { type OrderApi } from './libs/types/types';
