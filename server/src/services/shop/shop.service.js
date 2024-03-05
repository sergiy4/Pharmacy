import { HttpCode, ErrorMessage } from '../../libs/enums/enums.js';
import { CustomError } from '../../libs/exception/custom-exception.js';

class Shop {
  #shopRepository;

  constructor({ shopRepository }) {
    this.#shopRepository = shopRepository;
  }

  async getShops() {
    const shops = await this.#shopRepository.findAll();

    if (!shops.length) {
      throw new CustomError({
        message: ErrorMessage.SHOPS_NOT_FOUND,
        statusCode: HttpCode.NOT_FOUND,
      });
    }

    return shops;
  }
}

export { Shop };
