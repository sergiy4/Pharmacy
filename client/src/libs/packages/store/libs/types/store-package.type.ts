import {
  type configureStore,
  type ThunkMiddleware,
  type Tuple,
  type UnknownAction,
} from '@reduxjs/toolkit';

import { type medicineApi } from '../../../../../packages/medicine/medicine';
import { type shopApi } from '../../../../../packages/shop/shop';
import { type cartApi } from '../../../../../packages/cart/cart';
import { type orderApi } from '../../../../../packages/order/order';
import { type notificationApi } from '../../../notification/notification';

import { reducer as medicineReducer } from '../../../../../slices/medicine/medicine';
import { reducer as shopReducer } from '../../../../../slices/shops/shop';
import { reducer as cartReducer } from '../../../../../slices/cart/cart';
import { reducer as orderReducer } from '../../../../../slices/order/order';

type RootReducer = {
  medicines: ReturnType<typeof medicineReducer>;
  shops: ReturnType<typeof shopReducer>;
  cart: ReturnType<typeof cartReducer>;
  orders: ReturnType<typeof orderReducer>;
};

type ExtraArguments = {
  medicineApi: typeof medicineApi;
  shopApi: typeof shopApi;
  cartApi: typeof cartApi;
  orderApi: typeof orderApi;
  notificationApi: typeof notificationApi;
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
