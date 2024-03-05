const TableName = {
  MEDICINES: 'medicines',
  SHOPS: 'shops',
  ORDER_ITEMS: 'order_items',
  ORDERS: 'orders',
};

const ColumnName = {
  CREATED_AT: 'created_at',
  USERNAME: 'username',
  EMAIL: 'email',
  PHONE: 'phone',
  ADDRESS: 'address',
  ORDER_ID: 'order_id',
  MEDICINE_ID: 'medicine_id',
  QUANTITY: 'quantity',
};

export async function up(knex) {
  await knex.schema.createTable(TableName.ORDER_ITEMS, (table) => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.EMAIL).notNullable();
    table.string(ColumnName.USERNAME).notNullable();
    table.string(ColumnName.PHONE).notNullable();
    table.string(ColumnName.ADDRESS).notNullable();
  });

  await knex.schema.createTable(TableName.ORDERS, (table) => {
    table.increments(ColumnName.ID).primary();
    table
      .integer(ColumnName.ORDER_ID)
      .references(ColumnName.ID)
      .inTable(TableName.ORDER_ITEMS);
    table
      .integer(ColumnName.MEDICINE_ID)
      .references(ColumnName.ID)
      .inTable(TableName.MEDICINES);
    table.integer(ColumnName.QUANTITY).notNullable();
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists(TableName.ORDER_ITEM);
  await knex.schema.dropTableIfExists(TableName.ORDERS);
}
