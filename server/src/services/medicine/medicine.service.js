import { HttpCode, ErrorMessage } from '../../libs/enums/enums.js';
import { CustomError } from '../../libs/exception/custom-exception.js';

class Medicine {
  #medicineRepository;

  constructor({ medicineRepository }) {
    this.#medicineRepository = medicineRepository;
  }

  async getMedicines(shopId) {
    let medicines = [];
    if (shopId) {
      const searchData = {
        shop_id: shopId,
      };
      medicines = await this.#medicineRepository.findMany(searchData);
    } else {
      medicines = await this.#medicineRepository.findAll();
    }

    if (!medicines.length) {
      throw new CustomError({
        message: ErrorMessage.MEDICINES_NOT_FOUND,
        statusCode: HttpCode.NOT_FOUND,
      });
    }

    return medicines;
  }

  async updateFavoriteMedicine(id) {
    try {
      const currentMedicine = await this.#medicineRepository.findOneById(id);

      const dataForUpdate = {
        favorite: !currentMedicine.favorite,
      };

      const updatedMedicine = await this.#medicineRepository.updateById(
        id,
        dataForUpdate
      );
      console.log(updatedMedicine);

      return updatedMedicine;
    } catch (err) {
      throw new CustomError({
        message: err.detail,
        statusCode: HttpCode.BAD_REQUEST,
      });
    }
  }
}

export { Medicine };
