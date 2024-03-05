import styles from './styles.module.css';
import { MouseEvent } from 'react';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
  customClass?: string;
  attributes?: { [key: string]: string };
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  label,
  type = 'button',
  disabled,
  customClass,
  attributes,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      className={`${customClass} ${styles['button']}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...attributes}
    >
      {label}
    </button>
  );
};

export { Button };
