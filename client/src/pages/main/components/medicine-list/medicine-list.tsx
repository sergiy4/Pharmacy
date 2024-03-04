import styles from './styles.module.css';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../libs/hooks/hooks';
import { getMedicinesState } from '../../../../slices/medicine/medicine';
import { actions as medicineActionCreator } from '../../../../slices/medicine/medicine';
import { actions as appActionCreator } from '../../../../slices/app/app';
import {
  NotificationMessage,
  NotificationType,
} from '../../../../libs/packages/notification/libs/enums/enums';
import { MedicineCard } from '../medicine-card/medicine-card';

const MedicineList = () => {
  const dispatch = useAppDispatch();
  const medicines = useAppSelector((state) => getMedicinesState(state));

  const handleShopsLoad = useCallback((): void => {
    void dispatch(medicineActionCreator.getMedicines({ storeId: null }))
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

  useEffect(() => {
    handleShopsLoad();
  }, [handleShopsLoad]);

  const handleUpdateFavoriteMedicine = useCallback(
    (payload: { id: number }) =>
      dispatch(medicineActionCreator.updateFavoriteMedicine(payload)),
    [dispatch]
  );

  return (
    <>
      <section className={styles['medicines-list']}>
        {medicines.map((medicine) => (
          <MedicineCard
            key={medicine.id}
            medicine={medicine}
            handleUpdateFavoriteMedicine={handleUpdateFavoriteMedicine}
          />
        ))}
      </section>
    </>
  );
};

export { MedicineList };
