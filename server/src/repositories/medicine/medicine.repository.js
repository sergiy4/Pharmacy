import { Abstract } from '../abstract/abstract.repository.js';
import { database } from '../../db/db.js';

class Medicine extends Abstract {
  constructor({ tableName }) {
    super(tableName);
  }

  async getByIds(IDs) {
    return database.raw(
      'select * from medicines where id in (' +
        IDs.map((_item) => '?').join(',') +
        ')',
      IDs
    );
  }
}

export { Medicine };
