import { medicineRepository } from '../../repositories/index.js';
import { Medicine as MedicineService } from './medicine.service.js';

const medicineService = new MedicineService({
  medicineRepository,
});

export { medicineService };
