import styles from './styles.module.css';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../libs/hooks/hooks';
import { getAllCartState } from '../../../../slices/cart/cart';
import { actions as cartActionCreator } from '../../../../slices/cart/cart';
import { CartItem } from '../cart-item/cart-item';

const CartItems = () => {
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state) => getAllCartState(state));

  const handleCartItemsLoad = useCallback(
    (IDs: number[]): void => {
      void dispatch(cartActionCreator.getCartItems({ IDs }));
    },
    [dispatch]
  );

  useEffect(() => {
    handleCartItemsLoad(cartState.IDs);
  }, [handleCartItemsLoad, cartState.IDs]);
  return (
    <>
      <section className={styles['cart-section']}>
        {cartState.cart.length ? (
          cartState.cart.map((item) => (
            <CartItem orderItem={item} key={item.id} />
          ))
        ) : (
          <h2>Cart is empty</h2>
        )}
      </section>
    </>
  );
};

export { CartItems };
