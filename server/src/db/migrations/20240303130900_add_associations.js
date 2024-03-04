const TableName = {
  MEDICINES: 'medicines',
  SHOPS: 'shops',
};

const ColumnName = {
  ID: 'id',
  SHOP_ID: 'SHOP_id',
};

const RelationRule = {
  CASCADE: 'CASCADE',
  SET_NULL: 'SET NULL',
};

export async function up(knex) {
  await knex.schema.alterTable(TableName.MEDICINES, (table) => {
    table
      .integer(ColumnName.SHOP_ID)
      .references(ColumnName.ID)
      .inTable(TableName.SHOPS)
      .onUpdate(RelationRule.CASCADE)
      .onDelete(RelationRule.SET_NULL);
  });
}

export async function down(knex) {
  await knex.schema.alterTable(TableName.MEDICINES, (table) => {
    table.dropColumn(ColumnName.SHOP_ID);
  });
}
