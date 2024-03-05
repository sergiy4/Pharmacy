import styles from './styles.module.css';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../libs/hooks/hooks';
import { getAllCartState } from '../../../../slices/cart/cart';
import { actions as cartActionCreator } from '../../../../slices/cart/cart';
import { actions as appActionCreator } from '../../../../slices/app/app';
import {
  NotificationMessage,
  NotificationType,
} from '../../../../libs/packages/notification/libs/enums/enums';
import { CartItem } from '../cart-item/cart-item';

const CartItems = () => {
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state) => getAllCartState(state));

  const handleCartItemsLoad = useCallback(
    (IDs: number[]): void => {
      void dispatch(cartActionCreator.getCartItems({ IDs }))
        .unwrap()
        .catch(() => {
          void dispatch(
            appActionCreator.notify({
              message: NotificationMessage.GET_CART_FAILED,
              type: NotificationType.ERROR,
            })
          );
        });
    },
    [dispatch]
  );

  useEffect(() => {
    handleCartItemsLoad(cartState.IDs);
  }, [handleCartItemsLoad, cartState.IDs]);
  return (
    <>
      <section className={styles['cart-section']}>
        {cartState.cart.map((item) => (
          <CartItem orderItem={item} key={item.id} />
        ))}
      </section>
    </>
  );
};

export { CartItems };
