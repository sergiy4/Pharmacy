import styles from './styles.module.css';
import { CartItems } from './components/cart-items/cart-items';
import { UserForm } from './components/user-form/user-form';

const Cart = () => {
  return (
    <>
      <main className={styles['cart-main']}>
        <UserForm />
        <CartItems />
      </main>
    </>
  );
};

export { Cart };
