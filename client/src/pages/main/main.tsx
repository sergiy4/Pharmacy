import styles from './styles.module.css';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../libs/hooks/hooks';
import { ShopBar } from './components/shops-bar/shops-bar';
import { getShopsState } from '../../slices/shops/shop.slice';
import { actions as shopActionCreator } from '../../slices/shops/shop';
import { actions as appActionCreator } from '../../slices/app/app';
import { actions as medicineActionCreator } from '../../slices/medicine/medicine';
import { NotificationMessage } from '../../libs/packages/notification/libs/enums/notification-message.enum';
import { NotificationType } from '../../libs/packages/notification/libs/enums/notification-type.enum';
import { GetMedicineDtoRequest } from '../../libs/types/types';
import { MedicineList } from './components/medicine-list/medicine-list';

const Main = () => {
  const dispatch = useAppDispatch();
  const shops = useAppSelector((state) => getShopsState(state));

  const handleShopsLoad = useCallback((): void => {
    void dispatch(shopActionCreator.getShops())
      .unwrap()
      .catch(() => {
        void dispatch(
          appActionCreator.notify({
            message: NotificationMessage.SHOPS_LOAD_FAILED,
            type: NotificationType.ERROR,
          })
        );
      });
  }, [dispatch]);

  const handleMedicineLoad = useCallback(
    ({ storeId }: GetMedicineDtoRequest) =>
      dispatch(medicineActionCreator.getMedicines({ storeId })),
    [dispatch]
  );

  useEffect(() => {
    handleShopsLoad();
  }, [handleShopsLoad]);

  return (
    <>
      <main className={styles['main-page']}>
        <ShopBar shops={shops} handleMedicineLoad={handleMedicineLoad} />
        <MedicineList />
      </main>
    </>
  );
};

export { Main };
