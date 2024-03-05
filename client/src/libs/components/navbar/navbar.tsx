import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { AppRoute } from '../../enums/app/app-route.enum';

const Navbar = () => {
  return (
    <nav className={styles['header__nav']}>
      <ul className={styles['nav-header__list']}>
        <li className={styles['nav-header__item']}>
          <NavLink to={AppRoute.ROOT} className={styles['nav-header__inner']}>
            <span className={styles['visually-hidden']}>Main</span>
          </NavLink>
        </li>
        <li className={styles['nav-header__item']}>
          <NavLink to={AppRoute.CART} className={styles['nav-header__inner']}>
            <span className={styles['visually-hidden']}>Cart</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
