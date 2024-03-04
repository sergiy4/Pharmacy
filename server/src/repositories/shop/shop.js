import { TableName } from '../../libs/enums/enums.js';
import { Shop as ShopRepository } from './shop.repository.js';

const shopRepository = new ShopRepository({
  tableName: TableName.shopS,
});

export { shopRepository };
