import styles from './styles.module.css';
import { CartItems } from './components/cart-items/cart-items';
import { UserForm } from './components/user-form/user-form';
import { TotalSum } from './components/total-sum/total-sum';

const Cart = () => {
  return (
    <>
      <main className={styles['cart-main']}>
        <UserForm />
        <section className={styles['right-section']}>
          <TotalSum />
          <CartItems />
        </section>
      </main>
    </>
  );
};

export { Cart };
