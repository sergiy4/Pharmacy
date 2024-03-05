import styles from './styles.module.css';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import {
  AsyncThunkConfig,
  GetMedicineDtoRequest,
  Medicine,
  Shop,
} from '../../../../libs/types/types';
import { ShopCard } from '../shop-card/shop-card';

type Properties = {
  shops: Shop[];

  handleMedicineLoad: ({
    storeId,
  }: GetMedicineDtoRequest) => ReturnType<
    AsyncThunkAction<
      Record<'medicines', Medicine[]>,
      GetMedicineDtoRequest,
      AsyncThunkConfig
    >
  >;
};

const ShopBar = ({ shops, handleMedicineLoad }: Properties) => {
  return (
    <>
      <section className={styles['shop-bar']}>
        <div
          onClick={() => handleMedicineLoad({ storeId: null })}
          className={styles['shop-card']}
        >
          <p>All medicines</p>
        </div>
        {shops.map((shop) => (
          <ShopCard
            key={shop.id}
            shop={shop}
            handleMedicineLoad={handleMedicineLoad}
          />
        ))}
      </section>
    </>
  );
};

export { ShopBar };
