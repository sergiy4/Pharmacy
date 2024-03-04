import { getMedicines, updateFavoriteMedicine } from './actions';
import { actions } from './medicine.slice';

const allActions = {
  ...actions,
  getMedicines,
  updateFavoriteMedicine,
};

export { allActions as actions };
export { reducer } from './medicine.slice';
