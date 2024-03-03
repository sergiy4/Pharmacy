const TableName = {
  MEDICINES: 'medicines',
  STORES: 'stores',
};

const ColumnName = {
  CREATED_AT: 'created_at',
  NAME: 'name',
  ID: 'id',
  FAVORITE: 'favorite',
  PRICE: 'price',
  STORE: 'store',
};

export async function up(knex) {
  await knex.schema.createTable(TableName.STORES, (table) => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.NAME).notNullable().unique();
  });

  await knex.schema.createTable(TableName.MEDICINES, (table) => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.NAME).notNullable().unique();
    table.float(ColumnName.PRICE).notNullable();
    table
      .integer(ColumnName.STORE)
      .notNullable()
      .references(ColumnName.ID)
      .inTable(TableName.STORES);
    table
      .dateTime(ColumnName.CREATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
    table.boolean(ColumnName.FAVORITE).notNullable().defaultTo(false);
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists(TableName.USERS);
  await knex.schema.dropTableIfExists(TableName.POSTS);
}
