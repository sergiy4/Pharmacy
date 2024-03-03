const TableName = {
  MEDICINES: 'medicines',
  STORES: 'stores',
};

export async function seed(knex) {
  await knex(TableName.STORES).del();
  await knex(TableName.STORES).insert([
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
