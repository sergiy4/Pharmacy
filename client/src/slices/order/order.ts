import { createOrder } from './actions';
import { actions } from './order.slice';

const allActions = {
  ...actions,
  createOrder,
};

export { allActions as actions };
export { reducer } from './order.slice';
