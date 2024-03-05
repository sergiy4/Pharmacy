import { ChangeEvent } from 'react';
import styles from './styles.module.css';

type Properties = {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  attributes?: { [key: string]: string };
};

const Input = ({
  label,
  name,
  value,
  type,
  onChange,
  attributes,
}: Properties) => {
  return (
    <label className={styles['input']}>
      <span className={styles['input__heading']}>{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        {...attributes}
        required
      />
    </label>
  );
};

export { Input };
