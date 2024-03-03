import { HttpCode, ErrorMessage } from '../../libs/enums/enums.js';
import { CustomError } from '../../libs/exception/custom-exception.js';

class Store {
  #storeRepository;

  constructor({ storeRepository }) {
    this.#storeRepository = storeRepository;
  }

  async getStores() {
    const stores = await this.#storeRepository.findAll();

    if (!stores.length) {
      throw new CustomError({
        message: ErrorMessage.STORE_NOT_FOUND,
        statusCode: HttpCode.NOT_FOUND,
      });
    }

    return stores;
  }
}

export { Store };
