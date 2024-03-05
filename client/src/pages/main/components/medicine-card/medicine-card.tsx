import styles from './styles.module.css';
import { AsyncThunkConfig, type Medicine } from '../../../../libs/types/types';
import medicineImg from '../../../../assets/medicine.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStartRegular } from '@fortawesome/free-regular-svg-icons';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../../../libs/hooks/hooks';
import { actions as appActionCreator } from '../../../../slices/app/app';
import { actions as cartActionCreator } from '../../../../slices/cart/cart';
import {
  NotificationMessage,
  NotificationType,
} from '../../../../libs/packages/notification/libs/enums/enums';

type Properties = {
  medicine: Medicine;

  handleUpdateFavoriteMedicine: ({
    id,
  }: {
    id: number;
  }) => ReturnType<
    AsyncThunkAction<
      Record<'medicines', Medicine[]>,
      { id: number },
      AsyncThunkConfig
    >
  >;
};

const MedicineCard = ({
  medicine,
  handleUpdateFavoriteMedicine,
}: Properties) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateMedicine = useCallback(() => {
    setIsLoading(true);
    handleUpdateFavoriteMedicine({ id: medicine.id })
      .unwrap()
      .catch(() => {
        void dispatch(
          appActionCreator.notify({
            message: NotificationMessage.UPDATE_MEDICINE_FAILED,
            type: NotificationType.ERROR,
          })
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [handleUpdateFavoriteMedicine, dispatch]);

  const handleMedicineToCart = useCallback(
    (id: number) => dispatch(cartActionCreator.addToCart(id)),
    []
  );

  return (
    <>
      <div className={styles['medicines-list_card']}>
        {medicine.favorite ? (
          <FontAwesomeIcon
            icon={faStar}
            color='gold'
            onClick={handleUpdateMedicine}
            className={styles['icon']}
          />
        ) : (
          <FontAwesomeIcon
            icon={faStartRegular}
            color='gold'
            onClick={handleUpdateMedicine}
            className={styles['icon']}
          />
        )}
        <div className={styles['medicines-list_card-picture']}>
          <img src={medicineImg} className={styles['card-img']} />
        </div>
        <div className={styles['medicines-list_card-info']}>
          <p className={styles['card-info_name']}>{medicine.name}</p>
          <div className={styles['card-info_bottom']}>
            <p className={styles['card-info_price']}>{medicine.price}</p>
            <button
              className={styles['card-info_button']}
              onClick={() => handleMedicineToCart(medicine.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { MedicineCard };
