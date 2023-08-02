import { FC } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  value: string;
}

const Input: FC<InputProps> = ({
  onChange,
  placeholder,
  onKeyDown,
  type,
  value,
}) => (
  <input
    className={styles.input}
    onChange={onChange}
    onKeyDown={onKeyDown}
    type={type}
    placeholder={placeholder}
    value={value}
  />
);
export default Input;
