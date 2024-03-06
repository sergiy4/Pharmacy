import styles from './styles.module.css';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../libs/hooks/hooks';
import { getAllCartState } from '../../../../slices/cart/cart';
import { actions as cartActionCreator } from '../../../../slices/cart/cart';
import { CartItem } from '../cart-item/cart-item';
import { Loader } from '../../../../libs/components/components';

const CartItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state) => getAllCartState(state));

  const handleCartItemsLoad = useCallback(
    (IDs: number[]): void => {
      setIsLoading(true);
      void dispatch(cartActionCreator.getCartItems({ IDs })).finally(() => {
        setIsLoading(false);
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
        {isLoading ? (
          <Loader />
        ) : cartState.cart.length ? (
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
