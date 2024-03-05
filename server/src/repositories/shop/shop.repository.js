import { Abstract } from '../abstract/abstract.repository.js';

class Shop extends Abstract {
  constructor({ tableName }) {
    super(tableName);
  }
}

export { Shop };
