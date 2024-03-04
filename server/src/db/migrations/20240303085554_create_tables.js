const TableName = {
  MEDICINES: 'medicines',
  SHOPS: 'SHOPS',
};

const ColumnName = {
  CREATED_AT: 'created_at',
  NAME: 'name',
  ID: 'id',
  FAVORITE: 'favorite',
  PRICE: 'price',
};

export async function up(knex) {
  await knex.schema.createTable(TableName.SHOPS, (table) => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.NAME).notNullable().unique();
  });

  await knex.schema.createTable(TableName.MEDICINES, (table) => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.NAME).notNullable().unique();
    table.float(ColumnName.PRICE).notNullable();
    table.timestamp(ColumnName.CREATED_AT).defaultTo(knex.fn.now());
    table.boolean(ColumnName.FAVORITE).notNullable().defaultTo(false);
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists(TableName.MEDICINES);
  await knex.schema.dropTableIfExists(TableName.SHOPS);
}
