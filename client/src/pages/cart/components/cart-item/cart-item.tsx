import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../libs/hooks/hooks';
import styles from './styles.module.css';
import medicineImg from '../../../../assets/medicine.jpeg';
import { type CartItem } from '../../../../libs/types/types';
import { actions as cartActionCreator } from '../../../../slices/cart/cart';
import { Input } from '../../../../libs/components/components';

type Properties = {
  orderItem: CartItem;
};

const CartItem = ({ orderItem }: Properties) => {
  const [quantity, setQuantity] = useState(orderItem.quantity.toString());
  const dispatch = useAppDispatch();

  const handleCartItemsLoad = useCallback(
    (id: number): void => {
      void dispatch(cartActionCreator.deleteItemFromCart(id));
    },
    [dispatch]
  );

  const handleChangeQuantity = useCallback(
    (payload: { id: number; quantity: number }): void => {
      if (payload.quantity < 50) {
        void dispatch(cartActionCreator.changeQuantity(payload));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    handleChangeQuantity({ id: orderItem.id, quantity: Number(quantity) });
  }, [handleChangeQuantity, quantity, orderItem.id]);

  const handleQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };
  return (
    <>
      <div className={styles['medicines-list_card']}>
        <div className={styles['medicines-list_card-picture']}>
          <img src={medicineImg} className={styles['card-img']} />
        </div>
        <div className={styles['medicines-list_card-info']}>
          <Input
            type='number'
            label='Item quantity'
            name='quantity'
            value={quantity}
            onChange={handleQuantity}
            attributes={{
              max: '50',
              min: '1',
            }}
          />
          <p className={styles['card-info_name']}>{orderItem.name}</p>
          <div className={styles['card-info_bottom']}>
            <p className={styles['card-info_price']}>{orderItem.price}</p>
            <button
              className={styles['card-info_button']}
              onClick={() => handleCartItemsLoad(orderItem.id)}
            >
              Delete from cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { CartItem };
