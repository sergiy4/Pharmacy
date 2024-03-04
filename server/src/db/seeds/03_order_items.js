const TableName = {
  ORDER_ITEMS: 'order_items',
};

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex(TableName.ORDER_ITEMS).del();
  await knex(TableName.ORDER_ITEMS).insert([
    {
      email: 'email1@example.com',
      username: 'user1',
      phone: '1234367890',
      address: '123 Main St',
    },
    {
      email: 'email1@example.com',
      username: 'user1',
      phone: '1234367890',
      address: '123 Main St',
    },
    {
      email: 'email1@example.com',
      username: 'user1',
      phone: '1234367890',
      address: '123 Main St',
    },
    {
      email: 'email1@example.com',
      username: 'user1',
      phone: '1234367890',
      address: '123 Main St',
    },
    {
      email: 'email1@example.com',
      username: 'user1',
      phone: '1234367890',
      address: '123 Main St',
    },
    {
      email: 'email1@example.com',
      username: 'user1',
      phone: '1234367890',
      address: '123 Main St',
    },
    {
      email: 'email1@example.com',
      username: 'user1',
      phone: '1234367890',
      address: '123 Main St',
    },
    {
      email: 'email2@example.com',
      username: 'user2',
      phone: '2345078901',
      address: '456 Elm St',
    },
    {
      email: 'email2@example.com',
      username: 'user2',
      phone: '2345078901',
      address: '456 Elm St',
    },
    {
      email: 'email2@example.com',
      username: 'user2',
      phone: '2345078901',
      address: '456 Elm St',
    },
    {
      email: 'email2@example.com',
      username: 'user2',
      phone: '2345078901',
      address: '456 Elm St',
    },
    {
      email: 'email2@example.com',
      username: 'user2',
      phone: '2345078901',
      address: '456 Elm St',
    },
    {
      email: 'email3@example.com',
      username: 'user3',
      phone: '3156789012',
      address: '789 Oak St',
    },
    {
      email: 'email4@example.com',
      username: 'user4',
      phone: '4563890123',
      address: '987 Pine St',
    },
    {
      email: 'email5@example.com',
      username: 'user5',
      phone: '5678991234',
      address: '654 Maple St',
    },
    {
      email: 'email6@example.com',
      username: 'user6',
      phone: '6789011345',
      address: '321 Cedar St',
    },
    {
      email: 'email7@example.com',
      username: 'user7',
      phone: '7890723456',
      address: '654 Oak St',
    },
    {
      email: 'email8@example.com',
      username: 'user8',
      phone: '8901224567',
      address: '987 Moon St',
    },
    {
      email: 'email9@example.com',
      username: 'user9',
      phone: '9952345678',
      address: '123 Elm St',
    },

    {
      email: 'email14@example.com',
      username: 'user14',
      phone: '4567890133',
      address: '321 Oak St',
    },
    {
      email: 'email15@example.com',
      username: 'user15',
      phone: '5678921234',
      address: '789 Cedar St',
    },
    {
      email: 'email15@example.com',
      username: 'user15',
      phone: '5678921234',
      address: '789 Cedar St',
    },
    {
      email: 'email15@example.com',
      username: 'user15',
      phone: '5678921234',
      address: '789 Cedar St',
    },
  ]);
}
