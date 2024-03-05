import styles from './styles.module.css';
import { type Option } from './libs/types/types';
import { type ChangeEvent } from 'react';

type Properties = {
  title: string;
  name: string;
  options: Option[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  attributes?: { [key: string]: string };
};

const Select = ({ title, name, options, onChange, attributes }: Properties) => {
  return (
    <label className={styles['select']}>
      <span className={styles['visually-hidden']}>{title}</span>
      <select
        data-test-id='filter-duration'
        name={name}
        onChange={onChange}
        {...attributes}
      >
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export { Select };
