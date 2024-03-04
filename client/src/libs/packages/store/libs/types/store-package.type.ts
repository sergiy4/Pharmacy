import {
  type configureStore,
  type ThunkMiddleware,
  type Tuple,
  type UnknownAction,
} from '@reduxjs/toolkit';

import { type medicineApi } from '../../../../../packages/medicine/medicine';
import { type shopApi } from '../../../../../packages/shop/shop';
import { type cardApi } from '../../../../../packages/card/card';
import { type orderApi } from '../../../../../packages/order/order';

import { reducer as medicineReducer } from '../../../../../slices/medicine/medicine';
import { reducer as shopReducer } from '../../../../../slices/shops/shop';
import { reducer as cardReducer } from '../../../../../slices/card/card';
import { reducer as orderReducer } from '../../../../../slices/order/order';

type RootReducer = {
  medicines: ReturnType<typeof medicineReducer>;
  shops: ReturnType<typeof shopReducer>;
  card: ReturnType<typeof cardReducer>;
  orders: ReturnType<typeof orderReducer>;
};

type ExtraArguments = {
  medicineApi: typeof medicineApi;
  shopApi: typeof shopApi;
  cardApi: typeof cardApi;
  orderApi: typeof orderApi;
};

type StoreInstance = ReturnType<
  typeof configureStore<
    RootReducer,
    UnknownAction,
    Tuple<[ThunkMiddleware<RootReducer, UnknownAction, ExtraArguments>]>
  >
>;

type StorePackage = {
  extraArguments: ExtraArguments;
};

export { type ExtraArguments, type StoreInstance, type StorePackage };
