const TableName = {
  MEDICINES: 'medicines',
  SHOP: 'shops',
};

export async function seed(knex) {
  await knex(TableName.MEDICINES).del();
  await knex(TableName.MEDICINES).insert([
    {
      price: 3.99,
      shop_id: 2,
      favorite: true,
      name: 'ibuprofen',
    },
    {
      price: 7.99,
      shop_id: 2,
      favorite: false,
      name: 'acetaminophen',
    },
    {
      price: 5.49,
      shop_id: 3,
      favorite: false,
      name: 'aspirin',
    },
    {
      price: 4.99,
      shop_id: 4,
      favorite: false,
      name: 'naproxen',
    },
    {
      price: 6.99,
      shop_id: 5,
      favorite: false,
      name: 'loperamide',
    },
    {
      price: 8.99,
      shop_id: 6,
      favorite: false,
      name: 'diphenhydramine',
    },
    {
      price: 3.49,
      shop_id: 7,
      favorite: false,
      name: 'cetirizine',
    },
    {
      price: 9.99,
      shop_id: 8,
      favorite: false,
      name: 'fexofenadine',
    },
    {
      price: 2.99,
      shop_id: 9,
      favorite: false,
      name: 'ranitidine',
    },
    {
      price: 5.99,
      shop_id: 9,
      favorite: false,
      name: 'lansoprazole',
    },
    {
      price: 3.99,
      shop_id: 1,
      favorite: false,
      name: 'omeprazole',
    },
    {
      price: 7.99,
      shop_id: 2,
      favorite: false,
      name: 'simethicone',
    },
    {
      price: 5.49,
      shop_id: 3,
      favorite: false,
      name: 'magnesium hydroxide',
    },
    {
      price: 4.99,
      shop_id: 4,
      favorite: false,
      name: 'calcium carbonate',
    },
    {
      price: 6.99,
      shop_id: 5,
      favorite: false,
      name: 'docusate sodium',
    },
    {
      price: 8.99,
      shop_id: 6,
      favorite: false,
      name: 'sennosides',
    },
    {
      price: 3.49,
      shop_id: 7,
      favorite: false,
      name: 'bisacodyl',
    },
    {
      price: 9.99,
      shop_id: 8,
      favorite: false,
      name: 'lactulose',
    },
    {
      price: 2.99,
      shop_id: 9,
      favorite: false,
      name: 'polyethylene glycol',
    },
    {
      price: 5.99,
      shop_id: 9,
      favorite: false,
      name: 'psyllium husk',
    },
    {
      price: 3.99,
      shop_id: 1,
      favorite: false,
      name: 'probiotics',
    },
    {
      price: 7.99,
      shop_id: 2,
      favorite: false,
      name: 'vitamin C',
    },
    {
      price: 5.49,
      shop_id: 3,
      favorite: false,
      name: 'vitamin D',
    },
    {
      price: 4.99,
      shop_id: 4,
      favorite: false,
      name: 'calcium',
    },
    {
      price: 6.99,
      shop_id: 5,
      favorite: false,
      name: 'iron',
    },
    {
      price: 8.99,
      shop_id: 6,
      favorite: false,
      name: 'omega-3',
    },
    {
      price: 3.49,
      shop_id: 7,
      favorite: false,
      name: 'magnesium',
    },
    {
      price: 9.99,
      shop_id: 8,
      favorite: false,
      name: 'zinc',
    },
    {
      price: 2.99,
      shop_id: 9,
      favorite: false,
      name: 'melatonin',
    },
  ]);
}
