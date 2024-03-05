import { Navbar } from '../navbar/navbar';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__inner']}>
        <Navbar />
      </div>
    </header>
  );
};

export { Header };
