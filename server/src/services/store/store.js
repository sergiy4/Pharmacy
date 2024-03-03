import { storeRepository } from '../../repositories/index.js';
import { Store as StoreService } from './store.service.js';

const storeService = new StoreService({
  storeRepository,
});

export { storeService };
