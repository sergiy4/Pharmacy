import { TableName } from '../../libs/enums/enums.js';
import { Store as StoreRepository } from './store.repository.js';

const storeRepository = new StoreRepository({
  tableName: TableName.STORES,
});

export { storeRepository };
