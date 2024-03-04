import styles from './styles.module.css';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import {
  type AsyncThunkConfig,
  type GetMedicineDtoRequest,
  type Medicine,
  type Shop,
} from '../../../../libs/types/types';
import { useCallback, useState } from 'react';
import { actions as appActionCreator } from '../../../../slices/app/app';
import {
  NotificationMessage,
  NotificationType,
} from '../../../../libs/packages/notification/libs/enums/enums';
import { useAppDispatch } from '../../../../libs/hooks/hooks';

type Properties = {
  shop: Shop;
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

const ShopCard = ({ shop, handleMedicineLoad }: Properties) => {
  const dispatch = useAppDispatch();
  const { id, name } = shop;
  const [_isLoading, setIsLoading] = useState(false);

  const handleGetMedicines = useCallback(() => {
    setIsLoading(true);

    handleMedicineLoad({ storeId: id })
      .unwrap()
      .catch(() => {
        void dispatch(
          appActionCreator.notify({
            message: NotificationMessage.MEDICINE_LOAD_FAILED,
            type: NotificationType.ERROR,
          })
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [handleMedicineLoad]);

  return (
    <>
      <div onClick={handleGetMedicines} className={styles['shop-card']}>
        <p>{name}</p>
      </div>
    </>
  );
};

export { ShopCard };
