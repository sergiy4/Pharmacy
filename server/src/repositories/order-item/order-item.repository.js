import { Abstract } from '../abstract/abstract.repository.js';

class OrderItem extends Abstract {
  constructor({ tableName }) {
    super(tableName);
  }

  async searchOrderItemsByEmail(email) {
    return this.table
      .where('email', email)
      .select('id')
      .then((result) => (result = result.map((item) => item.id)));
  }
}

export { OrderItem };
