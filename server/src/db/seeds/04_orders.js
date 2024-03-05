const TableName = {
  ORDERS: 'orders',
};

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex(TableName.ORDERS).del();
  await knex(TableName.ORDERS).insert([
    {
      order_id: 1,
      medicine_id: 1,
      quantity: 1,
    },
    {
      order_id: 2,
      medicine_id: 2,
      quantity: 2,
    },
    {
      order_id: 3,
      medicine_id: 3,
      quantity: 3,
    },
    {
      order_id: 4,
      medicine_id: 4,
      quantity: 4,
    },
    {
      order_id: 5,
      medicine_id: 5,
      quantity: 5,
    },
    {
      order_id: 6,
      medicine_id: 6,
      quantity: 6,
    },
    {
      order_id: 7,
      medicine_id: 7,
      quantity: 7,
    },
    {
      order_id: 8,
      medicine_id: 8,
      quantity: 8,
    },
    {
      order_id: 9,
      medicine_id: 9,
      quantity: 9,
    },
    {
      order_id: 10,
      medicine_id: 10,
      quantity: 10,
    },
    {
      order_id: 11,
      medicine_id: 11,
      quantity: 1,
    },
    {
      order_id: 12,
      medicine_id: 12,
      quantity: 2,
    },
    {
      order_id: 13,
      medicine_id: 13,
      quantity: 3,
    },
    {
      order_id: 14,
      medicine_id: 14,
      quantity: 4,
    },
    {
      order_id: 15,
      medicine_id: 15,
      quantity: 5,
    },
    {
      order_id: 16,
      medicine_id: 16,
      quantity: 6,
    },
    {
      order_id: 17,
      medicine_id: 17,
      quantity: 7,
    },
    {
      order_id: 18,
      medicine_id: 18,
      quantity: 8,
    },
    {
      order_id: 19,
      medicine_id: 19,
      quantity: 9,
    },
    {
      order_id: 20,
      medicine_id: 20,
      quantity: 10,
    },
    {
      order_id: 21,
      medicine_id: 21,
      quantity: 1,
    },
    {
      order_id: 22,
      medicine_id: 22,
      quantity: 2,
    },
    {
      order_id: 1,
      medicine_id: 23,
      quantity: 3,
    },
    {
      order_id: 2,
      medicine_id: 24,
      quantity: 4,
    },
    {
      order_id: 3,
      medicine_id: 25,
      quantity: 5,
    },
    {
      order_id: 4,
      medicine_id: 26,
      quantity: 6,
    },
    {
      order_id: 5,
      medicine_id: 27,
      quantity: 7,
    },
    {
      order_id: 6,
      medicine_id: 28,
      quantity: 8,
    },
  ]);
}
