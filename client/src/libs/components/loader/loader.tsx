import styles from './styles.module.css';

const Loader = () => {
  return (
    <main className={styles['loader_container']}>
      <div data-test-id='loader' className={styles['loader']}></div>
    </main>
  );
};

export { Loader };
