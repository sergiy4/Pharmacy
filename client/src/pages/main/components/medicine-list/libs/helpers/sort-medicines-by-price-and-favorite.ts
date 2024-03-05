import { type Medicine } from '../../../../../../libs/types/types';

function sortMedicinesByPriceAndFavorite(
  medicines: Medicine[],
  ascending = true
): Medicine[] {
  const arrayForSort = [...medicines];

  const compareFn = (a: Medicine, b: Medicine) => {
    return ascending ? a.price - b.price : b.price - a.price;
  };

  const favoriteMedicines = arrayForSort.filter(
    (medicine) => medicine.favorite
  );
  const nonFavoriteMedicines = arrayForSort.filter(
    (medicine) => !medicine.favorite
  );

  favoriteMedicines.sort(compareFn);
  nonFavoriteMedicines.sort(compareFn);

  const sortedMedicines = [...favoriteMedicines, ...nonFavoriteMedicines];

  return sortedMedicines;
}

export { sortMedicinesByPriceAndFavorite };
