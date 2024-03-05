import { getShops } from './actions';
import { actions } from './shop.slice';

const allActions = {
  ...actions,
  getShops,
};

export { allActions as actions };
export { reducer, getShopsState } from './shop.slice';
