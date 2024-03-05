import { TableName } from '../../libs/enums/enums.js';
import { Medicine as MedicineRepository } from './medicine.repository.js';

const medicineRepository = new MedicineRepository({
  tableName: TableName.MEDICINES,
});

export { medicineRepository };
