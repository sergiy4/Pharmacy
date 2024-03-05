import styles from './styles.module.css';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../libs/hooks/hooks';
import { getMedicinesState } from '../../../../slices/medicine/medicine';
import { actions as medicineActionCreator } from '../../../../slices/medicine/medicine';
import { actions as appActionCreator } from '../../../../slices/app/app';
import {
  NotificationMessage,
  NotificationType,
} from '../../../../libs/packages/notification/libs/enums/enums';
import { MedicineCard } from '../medicine-card/medicine-card';
import { sortMedicinesByPriceAndFavorite } from './libs/helpers/helpers';
import { FilterBar } from '../filterbar/filter-bar';

const MedicineList = () => {
  const dispatch = useAppDispatch();
  const medicines = useAppSelector((state) => getMedicinesState(state));
  const [ascending, setAscending] = useState(true);
  const sortedMedicines = sortMedicinesByPriceAndFavorite(medicines, ascending);

  const handleDuration = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(JSON.parse(event.target.value));
    setAscending(JSON.parse(event.target.value) as boolean);
  };

  const handleMedicineLoad = useCallback((): void => {
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
    handleMedicineLoad();
  }, [handleMedicineLoad]);

  const handleUpdateFavoriteMedicine = useCallback(
    (payload: { id: number }) =>
      dispatch(medicineActionCreator.updateFavoriteMedicine(payload)),
    [dispatch]
  );

  return (
    <>
      <section className={styles['medicines-list']}>
        <FilterBar handlePrice={handleDuration} />
        {sortedMedicines.map((medicine) => (
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
