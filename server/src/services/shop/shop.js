import { shopRepository } from '../../repositories/index.js';
import { Shop as ShopService } from './shop.service.js';

const shopService = new ShopService({
  shopRepository,
});

export { shopService };
