const TableName = {
  MEDICINES: 'medicines',
  SHOPS: 'shops',
  ORDER_ITEM: 'orders_item',
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
  await knex.schema.createTable(TableName.ORDER_ITEM, (table) => {
    table.increments(ColumnName.ID).primary();
    table.string(ColumnName.EMAIL).notNullable().unique();
    table.string(ColumnName.USERNAME).notNullable().unique();
    table.integer(ColumnName.PHONE).notNullable().unique();
    table.string(ColumnName.ADDRESS).notNullable().unique();
  });

  await knex.schema.createTable(TableName.ORDERS, (table) => {
    table.increments(ColumnName.ID).primary();
    table
      .integer(ColumnName.ORDER_ID)
      .references(ColumnName.ID)
      .inTable(TableName.ORDER_ITEM);
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
