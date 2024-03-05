import { getCartItems } from './actions';
import { actions } from './cart.slice';

const allActions = {
  ...actions,
  getCartItems,
};

export { allActions as actions };
export {
  reducer,
  getAllCartState,
  getCartIDsState,
  getCartsState,
} from './cart.slice';
