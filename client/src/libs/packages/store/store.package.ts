import { medicineApi } from '../../../packages/medicine/medicine';
import { shopApi } from '../../../packages/shop/shop';
import { cartApi } from '../../../packages/cart/cart';
import {
  type ExtraArguments,
  type StoreInstance,
  type StorePackage,
} from './libs/types/types';

import { reducer as medicineReducer } from '../../../slices/medicine/medicine';
import { reducer as shopReducer } from '../../../slices/shops/shop';
import { reducer as cartReducer } from '../../../slices/cart/cart';
import { reducer as orderReducer } from '../../../slices/order/order';
import { configureStore } from '@reduxjs/toolkit';
import { orderApi } from '../../../packages/order/order';

class Store implements StorePackage {
  #instance: StoreInstance;

  public get instance(): StoreInstance {
    return this.#instance;
  }

  public constructor() {
    this.#instance = configureStore({
      devTools: true,
      reducer: {
        medicines: medicineReducer,
        shops: shopReducer,
        cart: cartReducer,
        orders: orderReducer,
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          thunk: {
            extraArgument: this.extraArguments,
          },
        });
      },
    });
  }

  public get extraArguments(): ExtraArguments {
    return {
      medicineApi,
      shopApi,
      cartApi,
      orderApi,
    };
  }
}

export { Store };
