class Store {
  #storeRepository;

  constructor({ storeRepository }) {
    this.#storeRepository = storeRepository;
  }
}

export { Store };
