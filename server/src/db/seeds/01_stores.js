const TableName = {
  MEDICINES: 'medicines',
  SHOPS: 'shops',
};

export async function seed(knex) {
  await knex(TableName.SHOPS).del();
  await knex(TableName.SHOPS).insert([
    { name: 'MediMart' },
    { name: 'Health Haven' },
    { name: 'Cure Corner' },
    { name: 'Meds Oasis' },
    { name: 'VitalRx' },
    { name: 'WellCare Pharmacy' },
    { name: 'Pillar Pharmacy' },
    { name: 'Remedies Junction' },
    { name: 'MedLife Depot' },
  ]);
}
