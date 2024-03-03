import { Abstract } from '../abstract/abstract.repository.js';

class Medicine extends Abstract {
  constructor({ tableName }) {
    super(tableName);
  }
}

export { Medicine };
