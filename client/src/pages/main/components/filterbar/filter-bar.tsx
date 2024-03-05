import styles from './styles.module.css';
import { ChangeEvent } from 'react';
import { Select } from '../../../../libs/components/select/select';
import { options } from './libs/data/data';

type FilterBarProperties = {
  handlePrice: (event: ChangeEvent<HTMLSelectElement>) => void;
};
const FilterBar = ({ handlePrice }: FilterBarProperties) => {
  return (
    <div className={styles['filter-bar']}>
      <Select
        name='price'
        title='Sort by price'
        options={options}
        onChange={handlePrice}
      />
    </div>
  );
};

export { FilterBar };
