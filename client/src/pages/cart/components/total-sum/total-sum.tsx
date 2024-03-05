import { useAppSelector } from '../../../../libs/hooks/hooks';
import styles from './styles.module.css';
import { getCartsState } from '../../../../slices/cart/cart';

const TotalSum = () => {
  const cartItems = useAppSelector((state) => getCartsState(state));

  const total = cartItems.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.quantity;
  }, 0);

  return (
    <div className={styles['total-sum']}>
      <h2>
        Total:
        {total.toFixed(2)} $
      </h2>
    </div>
  );
};

export { TotalSum };
