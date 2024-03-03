import { Abstract } from '../abstract/abstract.repository.js';

class Store extends Abstract {
  constructor({ tableName }) {
    super(tableName);
  }
}

export { Store };
