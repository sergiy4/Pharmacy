const TableName = {
  MEDICINES: 'medicines',
  STORES: 'stores',
};

const ColumnName = {
  ID: 'id',
  STORE_ID: 'store_id',
};

const RelationRule = {
  CASCADE: 'CASCADE',
  SET_NULL: 'SET NULL',
};

export async function up(knex) {
  await knex.schema.alterTable(TableName.MEDICINES, (table) => {
    table
      .integer(ColumnName.STORE_ID)
      .references(ColumnName.ID)
      .inTable(TableName.STORES)
      .onUpdate(RelationRule.CASCADE)
      .onDelete(RelationRule.SET_NULL);
  });
}

export async function down(knex) {
  await knex.schema.alterTable(TableName.MEDICINES, (table) => {
    table.dropColumn(ColumnName.STORE_ID);
  });
}
