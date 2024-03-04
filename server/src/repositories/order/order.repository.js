import { database } from '../../db/db.js';
import { Abstract } from '../abstract/abstract.repository.js';

class Order extends Abstract {
  constructor({ tableName }) {
    super(tableName);
  }

  async getOrdersByIDs(IDs) {
    return database.raw(
      'select * from orders where order_id in (' +
        IDs.map((_item) => '?').join(',') +
        ')',
      IDs
    );
  }
}

export { Order };
