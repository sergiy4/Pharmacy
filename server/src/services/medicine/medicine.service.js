class Medicine {
  #medicineRepository;

  constructor({ medicineRepository }) {
    this.#medicineRepository = medicineRepository;
  }
}

export { Medicine };
