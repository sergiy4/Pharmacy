import { database } from '../../db/db.js';

class Abstract {
  static tableName;

  get table() {
    if (!this.tableName) {
      throw new Error('The table name must be defined');
    }
    return database(this.tableName);
  }

  constructor(tableName) {
    this.tableName = tableName;
  }

  async create(data) {
    const [result] = await this.table.insert(data).returning('*');

    return result;
  }

  async findOneById(id) {
    const [result] = await this.table.where('id', id).returning('*');
    return result;
  }

  async findMany(data) {
    const result = await this.table.where(data).returning('*');
    return result;
  }

  async findAll() {
    return this.table.select('*');
  }

  async updateById(id, data) {
    const dataForUpdate = {
      ...data,
    };

    const [result] = await this.table
      .where('id', id)
      .update(dataForUpdate)
      .returning('*');

    return result;
  }

  async updateMany(searchData, updateData) {
    const [result] = await this.table
      .where(searchData)
      .update(updateData)
      .returning('*');
    return result;
  }

  async deleteById(id) {
    await this.table.where('id', id).del();
    return true;
  }
}

export { Abstract };
