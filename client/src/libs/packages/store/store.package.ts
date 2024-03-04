import { medicineApi } from '../../../packages/medicine/medicine';
import { shopApi } from '../../../packages/shop/shop';
import { cardApi } from '../../../packages/card/card';
import {
  type ExtraArguments,
  type StoreInstance,
  type StorePackage,
} from './libs/types/types';

import { reducer as medicineReducer } from '../../../slices/medicine/medicine';
import { reducer as shopReducer } from '../../../slices/shops/shop';
import { reducer as cardReducer } from '../../../slices/card/card';
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
        card: cardReducer,
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
      cardApi,
      orderApi,
    };
  }
}

export { Store };
