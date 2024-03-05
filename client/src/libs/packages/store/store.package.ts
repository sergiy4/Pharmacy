import { medicineApi } from '../../../packages/medicine/medicine';
import { shopApi } from '../../../packages/shop/shop';
import { cartApi } from '../../../packages/cart/cart';
import { orderApi } from '../../../packages/order/order';
import { notificationApi } from '../notification/notification';
import {
  type ExtraArguments,
  type StoreInstance,
  type StorePackage,
} from './libs/types/types';

import { reducer as medicineReducer } from '../../../slices/medicine/medicine';
import { reducer as shopReducer } from '../../../slices/shops/shop';
import { reducer as cartReducer } from '../../../slices/cart/cart';
import { reducer as orderReducer } from '../../../slices/order/order';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  type Persistor,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from './store';

class Store implements StorePackage {
  #instance: StoreInstance;
  #persistor: Persistor;

  public get instance(): StoreInstance {
    return this.#instance;
  }

  public get persistor(): Persistor {
    return this.#persistor;
  }

  public constructor() {
    this.#instance = configureStore({
      devTools: true,
      reducer: this.getPersistedReducer(),
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          thunk: {
            extraArgument: this.extraArguments,
          },
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        });
      },
    });

    this.#persistor = persistStore(this.#instance);
  }

  private getPersistedReducer() {
    return persistReducer<RootState>(
      this.persistConfig,
      this.getCombineReducers()
    );
  }

  private getCombineReducers() {
    return combineReducers({
      medicines: medicineReducer,
      shops: shopReducer,
      cart: cartReducer,
      orders: orderReducer,
    });
  }

  private get persistConfig() {
    return {
      key: 'root',
      storage,
      whitelist: ['cart'],
    };
  }

  public get extraArguments(): ExtraArguments {
    return {
      medicineApi,
      shopApi,
      cartApi,
      orderApi,
      notificationApi,
    };
  }
}

export { Store };
